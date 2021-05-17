import React from 'react'
import PropTypes from 'prop-types'

function PrimaryButton(props) {
  return (
    <button
      className='primary-button'
      {...props}
    />
  )
}

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
}

PrimaryButton.defaultProps = {
  onClick: () => true
}

export default PrimaryButton;
