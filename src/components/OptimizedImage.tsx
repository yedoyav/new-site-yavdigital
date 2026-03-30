import { useEffect, useState, ImgHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'decoding'> {
  /** Placeholder para lazy loading (base64 ou cor) */
  placeholder?: string;
  /** Efeito de transição */
  effect?: 'blur' | 'fade' | 'none';
  /** Threshold para lazy loading (px antes do viewport) */
  threshold?: number;
  /** Qualidade da imagem (para srcset) */
  quality?: number;
}

/**
 * Componente de Imagem Otimizada
 * 
 * Features:
 * - Lazy loading nativo + Intersection Observer fallback
 * - Decoding assíncrono
 * - Placeholder durante carregamento
 * - Efeitos de transição suaves
 * - Suporte a srcset para responsive images
 * - Error handling com fallback
 * 
 * @example
 * <OptimizedImage
 *   src="/hero-image.webp"
 *   alt="Descrição acessível"
 *   width={800}
 *   height={600}
 *   effect="blur"
 *   priority={false}
 * />
 */
export function OptimizedImage({
  src,
  alt,
  className,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+',
  effect = 'blur',
  threshold = 100,
  quality = 80,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imgRef, setImgRef] = useState<HTMLImageElement | null>(null);

  // Intersection Observer para lazy loading
  useEffect(() => {
    if (!imgRef || props.loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: `${threshold}px`,
        threshold: 0.01,
      }
    );

    observer.observe(imgRef);

    return () => observer.disconnect();
  }, [imgRef, threshold, props.loading]);

  // Generate srcset para diferentes resoluções
  const generateSrcSet = (baseSrc: string) => {
    if (!baseSrc) return undefined;
    
    const widths = [320, 640, 768, 1024, 1280, 1920];
    return widths
      .map((w) => {
        // Se já tiver parâmetros na URL, adicionar &width, senão ?width
        const separator = baseSrc.includes('?') ? '&' : '?';
        return `${baseSrc}${separator}width=${w}&quality=${quality} ${w}w`;
      })
      .join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div
      className={twMerge(
        'relative overflow-hidden bg-gray-100',
        effect === 'blur' && !isLoaded && 'animate-pulse',
        className
      )}
      style={{
        aspectRatio: props.width && props.height ? `${props.width}/${props.height}` : undefined,
      }}
    >
      {/* Placeholder */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: placeholder.startsWith('data:') 
              ? `url(${placeholder})` 
              : `linear-gradient(135deg, ${placeholder} 0%, #f0f0f0 100%)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
      )}

      {/* Imagem principal */}
      {isInView && !hasError && (
        <img
          ref={setImgRef}
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          fetchPriority={props.loading === 'eager' ? 'high' : 'auto'}
          sizes={sizes}
          srcSet={generateSrcSet(src!)}
          onLoad={handleLoad}
          onError={handleError}
          className={twMerge(
            'w-full h-full object-cover transition-all duration-700',
            effect === 'blur' && !isLoaded && 'blur-xl scale-105',
            effect === 'blur' && isLoaded && 'blur-0 scale-100',
            effect === 'fade' && !isLoaded && 'opacity-0',
            effect === 'fade' && isLoaded && 'opacity-100',
            props.className
          )}
          {...props}
        />
      )}

      {/* Fallback para erro */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="sr-only">Erro ao carregar imagem: {alt}</span>
        </div>
      )}
    </div>
  );
}

/**
 * Hook para pré-carregamento de imagens críticas
 * 
 * @example
 * usePrefetchImages(['/hero.webp', '/logo.webp']);
 */
export function usePrefetchImages(imageUrls: string[]) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.decoding = 'async';
      // Pré-carrega mas não bloqueia
    });
  }, [imageUrls]);
}

/**
 * Componente para imagens prioritárias (above the fold)
 * Carrega imediatamente sem lazy loading
 */
export function PriorityImage(props: OptimizedImageProps) {
  return <OptimizedImage {...props} loading="eager" />;
}
