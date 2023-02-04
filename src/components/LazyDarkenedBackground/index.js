import { useState, useEffect } from 'react';
import placeholderImage from '../../assets/placeholder.png';

function LazyDarkenedBackground({ src, children, className }) {
  const [source, setSource] = useState(placeholderImage);
  const darkLayer =
    'linear-gradient(var(--overlay-color), var(--overlay-color))';

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setSource(src);
  }, [src]);

  return (
    <div
      className={className}
      style={{
        backgroundImage: `${darkLayer}, url(${source})`,
      }}
    >
      {children}
    </div>
  );
}

export default LazyDarkenedBackground;
