import './Navbar.css';
import profileIcon from '../../assets/profile.png';
import settingsIcon from '../../assets/settings.png';

function Navbar() {
  return (
    <nav className="nav header__nav">
      <a href="#profile">
        <img src={profileIcon} alt="Profile" loading="lazy" />
      </a>
      <a href="#settings">
        <img src={settingsIcon} alt="Settings" loading="lazy" />
      </a>
    </nav>
  );
}

export default Navbar;
