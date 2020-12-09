import React, { Fragment } from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import './LoadingIndicator.scss'

const LoadingIndicator = ({ show }) => (
  <>
    <Modal show={show} onHide={() => { }} centered dialogClassName="download-progress-modal-30w">
      <div className="download-progress-text">
        <Spinner animation="grow" size="sm" role="status" variant="info" />
        {' '}
        Loading...
      </div>
    </Modal>
  </>
)

export default LoadingIndicator
