import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const headerStyle = {
    backgroundColor: 'var(--color-white)',
    boxShadow: 'var(--shadow-sm)',
    padding: 'var(--spacing-md) var(--spacing-lg)',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const logoStyle = {
    fontWeight: '700',
    fontSize: '22px',
    color: 'var(--color-primary)',
    textDecoration: 'none',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-md)',
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinkStyle = (path) => ({
    color: isActive(path) ? 'var(--color-primary)' : 'var(--color-dark)',
    fontWeight: isActive(path) ? '500' : '400',
    textDecoration: 'none',
    padding: 'var(--spacing-xs) var(--spacing-sm)',
  });

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          Auth App
        </Link>
        
        <nav style={navStyle}>
          <Link to="/" style={navLinkStyle("/")}>
            Home
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" style={navLinkStyle("/dashboard")}>
                Dashboard
              </Link>
              <Button variant="tertiary" onClick={logout}>
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" style={navLinkStyle("/login")}>
                Log In
              </Link>
              <Link to="/register">
                <Button variant="primary">Sign Up</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
