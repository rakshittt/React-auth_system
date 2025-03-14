import React from 'react';

const buttonStyles = {
  primary: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-white)',
    border: 'none',
  },
  secondary: {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-primary)',
    border: '1px solid var(--color-primary)',
  },
  tertiary: {
    backgroundColor: 'transparent',
    color: 'var(--color-tertiary)',
    border: '1px solid var(--color-tertiary)',
  }
};

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  fullWidth = false, 
  disabled = false, 
  onClick, 
  className = '', 
  ...rest 
}) => {
  const style = {
    ...buttonStyles[variant],
    padding: '12px 24px',
    borderRadius: 'var(--border-radius-md)',
    fontSize: '16px',
    fontWeight: '500',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.7 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'all 0.2s ease',
    outline: 'none',
  };

  return (
    <button
      type={type}
      style={style}
      disabled={disabled}
      onClick={onClick}
      className={`button ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;