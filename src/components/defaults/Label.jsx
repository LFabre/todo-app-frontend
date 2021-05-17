import React from 'react'
import PropTypes from 'prop-types'

function Label({ error, ...props }) {
  return (
    <label
      className={error ? 'label-error' : ''}
      {...props}
    />
  )
}

Label.propTypes = {
  error: PropTypes.bool,
}

Label.defaultProps = {
  error: false
}

export default Label;
