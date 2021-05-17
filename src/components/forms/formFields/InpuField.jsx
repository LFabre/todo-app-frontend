import React from 'react'
import PropTypes from 'prop-types'

function InpuField({ type, value, onChange, error, ...rest }) {
  return (
    <div className="textField">
      <input
        className="textField-input"
        type={type}
        value={value || ''}
        onChange={e => onChange(e, e.target.value)}
        {...rest}
      />
      <label className="textField-error">
        {error}
      </label>
    </div>
  )
}

InpuField.propTypes = {
  type: PropTypes.oneOf([
    'text', 
    'number', 
    'password',
    'date'
  ]),
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
}

InpuField.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  error: '',
  onChange: () => true
}

export default InpuField;
