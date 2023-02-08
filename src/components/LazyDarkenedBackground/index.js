import { useState, useEffect } from 'react';

function LazyDarkenedBackground({
  src,
  children,
  className,
  afterLoadedClassName,
}) {
  const placeholderImageSource = 'assets/placeholder.jpg';
  const [source, setSource] = useState(placeholderImageSource);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSource(src);
  }, [src]);

  const wrapWithDarkLayer = (source) => {
    return `linear-gradient(var(--overlay-color), var(--overlay-color)), url(${source})`;
  };

  return (
    <div
      className={`${className} ${
        source === placeholderImageSource
          ? 'background-cover'
          : afterLoadedClassName
      }`}
      style={{
        backgroundImage: wrapWithDarkLayer(source),
      }}
    >
      {children}
    </div>
  );
}

export default LazyDarkenedBackground;
