import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'var(--color-dark)',
    color: 'var(--color-white)',
    padding: 'var(--spacing-xl) var(--spacing-md)',
    marginTop: 'auto',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: 'var(--spacing-lg)',
    marginBottom: 'var(--spacing-md)',
  };

  const linkStyle = {
    color: 'var(--color-white)',
    textDecoration: 'none',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={linkContainerStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <a href="#privacy" style={linkStyle}>Privacy Policy</a>
          <a href="#terms" style={linkStyle}>Terms of Service</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Auth App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
