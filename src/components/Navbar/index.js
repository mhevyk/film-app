import './Navbar.css';
import profileIcon from '../../assets/profile.svg';
import settingsIcon from '../../assets/settings.svg';

function Navbar() {
  return (
    <nav className="nav header__nav">
      <a href="#profile" className="action-icon">
        <img src={profileIcon} alt="Profile" loading="lazy" />
      </a>
      <a href="#settings" className="action-icon">
        <img src={settingsIcon} alt="Settings" loading="lazy" />
      </a>
    </nav>
  );
}

export default Navbar;
