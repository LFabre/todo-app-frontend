import React from 'react'
import PropTypes from 'prop-types'

function Modal({ show, onClose, children }) {

  const handleClose = e => {
    if (e.target.className === 'modal')
      onClose()
  }

  if (!show)
    return null

  return (
    <div className="modal" onClick={handleClose}>
      {children}
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
}

Modal.defaultProps = {
  show: false,
  onClose: () => true
}

export default Modal