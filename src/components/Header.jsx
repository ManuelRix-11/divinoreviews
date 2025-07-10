import React from 'react';
import logo from '../assets/logo-divino-reviews2.png';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <img src={logo} alt="diVino Logo" style={styles.logox} />
      </div>

      <nav style={styles.nav}>
        <a href="#" style={styles.link}>Home</a>
        <a href="#" style={styles.link}>Reviews</a>
        <a href="#" style={styles.link}>About</a>
        <a href="#" style={styles.link}>Contact</a>
      </nav>

      <div style={styles.right}>
        <button style={styles.userBtn}>👤</button>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    width: '100vw',
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
  right: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
  },
  userBtn: {
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Header;
