import './NavbarMenu.css';

function NavbarMenu({ items, ...props }) {
  return (
    <nav {...props}>
      {items.map((item) => (
        <a
          key={item.alt}
          href={item.href}
          className={`link ${item.classNames || 'action-icon'}`}
        >
          <img src={item.image} alt={item.alt} loading="lazy" />
        </a>
      ))}
    </nav>
  );
}

export default NavbarMenu;
