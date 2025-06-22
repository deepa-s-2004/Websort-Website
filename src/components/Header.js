import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  Image,
  NavigationOptions,
  StyledIcon,
  Options,
  Button,
  BarIcon,
  MobileMenu
} from './HeaderStyle.js';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <HeaderContainer>
      <Image src="https://res.cloudinary.com/dsedlicx9/image/upload/v1750397724/websort_logo_oychgm.png" />
      <BarIcon onClick={toggleMenu} />
      
      <Options>
        <Link to="/">
          <NavigationOptions>
            <StyledIcon />
            <p>About Us</p>
          </NavigationOptions>
        </Link>
        <Link to="/services">
          <NavigationOptions>
            <StyledIcon />
            <p>Services</p>
          </NavigationOptions>
        </Link>
        <Link to="/projects">
          <NavigationOptions>
            <StyledIcon />
            <p>Projects</p>
          </NavigationOptions>
        </Link>
        <Link to="/careers">
          <NavigationOptions>
            <StyledIcon />
            <p>Careers</p>
          </NavigationOptions>
        </Link>
        <Link to="/contactus">
          <Button>Contact Us</Button>
        </Link>
      </Options>

      {menuOpen && (
        <MobileMenu>
          <Link to="/" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
          <Link to="/contactus" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
