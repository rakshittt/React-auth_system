import React from 'react';

const Card = ({ 
  children, 
  title, 
  subtitle, 
  elevation = 'md', 
  padding = 'md',
  className = '' 
}) => {
  const shadows = {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };

  const paddings = {
    sm: 'var(--spacing-md)',
    md: 'var(--spacing-lg)',
    lg: 'var(--spacing-xl)'
  };

  const cardStyle = {
    backgroundColor: 'var(--color-white)',
    borderRadius: 'var(--border-radius-md)',
    boxShadow: shadows[elevation],
    padding: paddings[padding],
    marginBottom: 'var(--spacing-md)',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: subtitle ? '4px' : '16px',
    color: 'var(--color-dark)',
  };

  const subtitleStyle = {
    fontSize: '14px',
    color: 'var(--color-tertiary)',
    marginBottom: '16px',
  };

  return (
    <div style={cardStyle} className={`card ${className}`}>
      {title && <h3 style={titleStyle}>{title}</h3>}
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
      {children}
    </div>
  );
};

export default Card;