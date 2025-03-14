import React from 'react';

const Input = ({ 
  label, 
  id, 
  type = 'text', 
  value, 
  onChange, 
  error, 
  placeholder, 
  required = false,
  ...rest 
}) => {
  const inputStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    borderRadius: 'var(--border-radius-md)',
    border: error ? '1px solid var(--color-error)' : '1px solid #DDDDDD',
    outline: 'none',
    backgroundColor: 'var(--color-white)',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'var(--color-dark)',
  };

  return (
    <div style={{ marginBottom: '16px' }}>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}{required && <span style={{ color: 'var(--color-error)' }}> *</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyle}
        required={required}
        {...rest}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;