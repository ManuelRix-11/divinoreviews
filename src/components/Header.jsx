import React from 'react';
import logo from '../assets/logo-divino-reviews2.png';
import { useNavigate } from 'react-router-dom';


const Header = () => {
   const navigate = useNavigate();

  const handleNavigation = (e, path) => {
    e.preventDefault(); 
    navigate(path);
  };

  return (
    <header style={styles.header}>
    <div style={styles.left}>
        <img src={logo} alt="diVino Logo" style={styles.logox} />
    </div>

      <nav style={styles.nav}>
        <a href="/" style={styles.link} onClick={(e) => handleNavigation(e, '/')}>Home</a>
        <a href="/review" style={styles.link} onClick={(e) => handleNavigation(e, '/review')}>Reviews</a>
        <a href="#" style={styles.link}>About</a>
        <a href="#" style={styles.link}>Contact</a>
      </nav>


    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'white',
    //position: 'sticky',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    //width: '100vw',
    overflowX: 'hidden',
    boxSizing: 'border-box',
    padding: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #ddd',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,  // per sicurezza sopra nav
  },
  logox: {
    marginLeft: 10,
    height: '3.2rem',
    objectFit: 'contain',
  },
  nav: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '3rem',
    alignItems: 'center',
    zIndex: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
  },
};

export default Header;
