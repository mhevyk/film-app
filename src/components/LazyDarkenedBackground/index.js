import { useState, useEffect } from 'react';
import { publicPath } from '../../global';

function LazyDarkenedBackground({
  src,
  children,
  className,
  afterLoadedClassName,
}) {
  const placeholderImageSource = `${publicPath}assets/placeholder.jpg`;
  const [source, setSource] = useState(placeholderImageSource);

  useEffect(() => {
    const img = new Image();
    const publicImageSource = `${publicPath}${src}`;
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
