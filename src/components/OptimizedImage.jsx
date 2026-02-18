import React from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  fetchpriority = 'auto',
  sizes = '100vw',
  style = {},
  ...props 
}) => {
  // Se a imagem já tiver tamanho específico, não modificar
  const hasSpecificSize = src.includes('-400.') || src.includes('-800.') || src.includes('-1200.');
  
  // Gerar srcSet apenas para imagens base
  const getSrcSet = (baseSrc) => {
    if (hasSpecificSize) return null; // Já tem tamanho específico
    
    const name = baseSrc.replace(/\.[^/.]+$/, '');
    return `${name}-400.webp 400w, ${name}-800.webp 800w, ${name}-1200.webp 1200w`;
  };

  const srcSet = getSrcSet(src);
  const defaultSrc = hasSpecificSize ? src : src.replace(/\.[^/.]+$/, '-800.webp');

  return (
    <img
      src={defaultSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding="async"
      fetchpriority={fetchpriority}
      {...props}
    />
  );
};

export default OptimizedImage;
