import { useEffect, useRef, useState } from 'react';

interface HeroVideoBackgroundProps {
  videoUrl: string;
  posterUrl?: string;
  className?: string;
}

export default function HeroVideoBackground({
  videoUrl,
  posterUrl,
  className = ''
}: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
    };

    const handleError = () => {
      setHasError(true);
      console.error('Video failed to load');
    };

    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('error', handleError);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setHasError(true);
    }

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden z-0 ${className}`}>
      {!hasError ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={posterUrl}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-0 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ willChange: 'opacity' }}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-0" />
        </>
      ) : (
        posterUrl && (
          <>
            <img
              src={posterUrl}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-0" />
          </>
        )
      )}
    </div>
  );
}
