import { useState, useEffect } from 'react';
import { isDevelopmentMode, publicPath } from '../../global';

const path = isDevelopmentMode ? publicPath : '';

function LazyDarkenedBackground({
  src,
  children,
  className,
  afterLoadedClassName,
}) {
  const placeholderImageSource = `${path}assets/placeholder.jpg`;
  const [source, setSource] = useState(placeholderImageSource);

  useEffect(() => {
    const img = new Image();
    const publicImageSource = `${path}${src}`;
    img.src = publicImageSource;
    img.onload = () => setSource(publicImageSource);
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
