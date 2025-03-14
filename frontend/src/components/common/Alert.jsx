import React from 'react';

const Alert = ({ 
  type = 'info', 
  message, 
  onClose, 
  className = '' 
}) => {
  const alertTypes = {
    success: {
      backgroundColor: '#E8F7F6',
      color: 'var(--color-success)',
      borderColor: 'var(--color-success)',
    },
    error: {
      backgroundColor: '#FFEFEB',
      color: 'var(--color-error)',
      borderColor: 'var(--color-error)',
    },
    warning: {
      backgroundColor: '#FFF8E6',
      color: '#FFC107',
      borderColor: '#FFC107',
    },
    info: {
      backgroundColor: '#E6F4FF',
      color: '#0078D4',
      borderColor: '#0078D4',
    },
  };

  const alertStyle = {
    padding: '12px 16px',
    borderRadius: 'var(--border-radius-md)',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    ...alertTypes[type],
    borderLeft: `4px solid ${alertTypes[type].borderColor}`,
  };

  const messageStyle = {
    margin: 0,
    fontSize: '14px',
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    color: alertTypes[type].color,
  };

  return (
    <div style={alertStyle} className={`alert alert-${type} ${className}`}>
      <p style={messageStyle}>{message}</p>
      {onClose && (
        <button style={closeButtonStyle} onClick={onClose} aria-label="Close">
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;