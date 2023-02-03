import styles from './Button.module.css';

function Button({ variant, children, ...otherProps }) {
  let variantClassName;
  switch (variant) {
    case 'gradient-bordered':
      variantClassName = 'gradient';
      break;
    default:
      variantClassName = '';
      break;
  }

  return (
    <button
      className={`${styles.button} ${styles[variantClassName]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
