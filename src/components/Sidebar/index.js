import './Sidebar.css';
import sidebarItems from './sidebarItems';
import NavbarMenu from '../NavbarMenu';

function Sidebar() {
  return (
    <aside className="header__sidebar">
      <NavbarMenu items={sidebarItems} className="nav sidebar__nav" />
    </aside>
  );
}

export default Sidebar;
