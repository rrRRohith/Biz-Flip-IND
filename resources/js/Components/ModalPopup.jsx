import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalPopup({ show, handleClose, data, title, ...props }) {
  return (
    <Modal show={show} onHide={handleClose} {...props}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data ? (
            <div dangerouslySetInnerHTML={{ __html: data }} />
            ) : (
            'Loading...'
            )}
      </Modal.Body>
   
    </Modal>
  );
}

export default ModalPopup;
