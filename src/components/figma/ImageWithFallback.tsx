import React from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  fallback = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
  ...props 
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = React.useState(src);

  const handleError = () => {
    setImgSrc(fallback);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}