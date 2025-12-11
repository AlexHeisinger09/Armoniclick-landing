import { useState, useEffect, useRef } from 'react'

interface CloudinaryImageProps {
  publicId: string
  alt: string
  className?: string
  width?: number
  height?: number
  quality?: 'auto' | 'auto:best' | 'auto:good' | 'auto:eco' | 'auto:low'
  crop?: 'scale' | 'fit' | 'fill' | 'crop'
  gravity?: 'auto' | 'face' | 'center'
  eager?: boolean
}

const CLOUDINARY_CLOUD_NAME = 'dafeskzbp'

export function CloudinaryImage({
  publicId,
  alt,
  className = '',
  width,
  height,
  quality = 'auto',
  crop = 'scale',
  gravity = 'auto',
  eager = false
}: CloudinaryImageProps) {
  const [isLoaded, setIsLoaded] = useState(eager)
  const [isInView, setIsInView] = useState(eager)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (eager) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px'
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [eager])

  // Construir URL optimizada de Cloudinary
  const buildCloudinaryUrl = () => {
    const transformations: string[] = []

    // Formato automático (WebP cuando esté disponible)
    transformations.push('f_auto')

    // Calidad automática
    transformations.push(`q_${quality}`)

    // DPR automático para pantallas retina
    transformations.push('dpr_auto')

    // Dimensiones si se especifican
    if (width) {
      transformations.push(`w_${width}`)
    }
    if (height) {
      transformations.push(`h_${height}`)
    }

    // Crop mode
    if (width || height) {
      transformations.push(`c_${crop}`)
    }

    // Gravity para recortes inteligentes
    if (crop === 'crop' || crop === 'fill') {
      transformations.push(`g_${gravity}`)
    }

    const transformString = transformations.join(',')
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformString}/${publicId}`
  }

  // Generar srcset para imágenes responsive
  const buildSrcSet = () => {
    if (!width) return undefined

    const sizes = [0.5, 1, 1.5, 2] // 50%, 100%, 150%, 200% del ancho base
    return sizes
      .map((multiplier) => {
        const scaledWidth = Math.round(width * multiplier)
        const transformations = [
          'f_auto',
          `q_${quality}`,
          `w_${scaledWidth}`,
          height ? `h_${Math.round(height * multiplier)}` : '',
          `c_${crop}`,
          crop === 'crop' || crop === 'fill' ? `g_${gravity}` : ''
        ]
          .filter(Boolean)
          .join(',')

        return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformations}/${publicId} ${scaledWidth}w`
      })
      .join(', ')
  }

  // Placeholder blur mientras carga
  const placeholderUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto:low,w_50,e_blur:1000/${publicId}`

  return (
    <img
      ref={imgRef}
      src={isInView ? buildCloudinaryUrl() : placeholderUrl}
      srcSet={isInView && width ? buildSrcSet() : undefined}
      alt={alt}
      className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      loading={eager ? 'eager' : 'lazy'}
      onLoad={() => setIsLoaded(true)}
      style={{
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  )
}
