import React from "react";

const OptimizedImage = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  fetchpriority = "auto",
  sizes = "100vw",
  width,
  height,
  isLogo = false,
  style = {},
  ...props
}) => {
  const baseName = src.replace(/-(100|200|400|800|1200)(\.[^.]+)$/, "");

  let srcSet, defaultSrc;

  if (isLogo) {
    srcSet = `${baseName}-100.webp 100w, ${baseName}-200.webp 200w, ${baseName}-400.webp 400w`;
    defaultSrc = `${baseName}-200.webp`;
  } else {
    srcSet = `${baseName}-400.webp 400w, ${baseName}-800.webp 800w, ${baseName}-1200.webp 1200w`;
    defaultSrc = `${baseName}-800.webp`;
  }

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
      width={width}
      height={height}
      {...props}
    />
  );
};

export default OptimizedImage;
