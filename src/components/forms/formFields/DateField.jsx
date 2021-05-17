import React from 'react'
import PropTypes from 'prop-types'

function DateField({ type, value, onChange, error, ...rest }) {
  return (
    <div className="textField">
      <input
        className="textField-input"
        type='date'
        value={value}
        onChange={e => onChange(e, e.target.value)}
        {...rest}
      />
      <label className="textField-error">
        {error}
      </label>
    </div>
  )
}

DateField.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'password']),
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
}

DateField.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  error: '',
  onChange: () => true
}

export default DateField;
