import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalPopup({ show, handleClose, data, title, size =null, children , ...props}) {
  return (
    <Modal show={show} onHide={handleClose}  size={size} {...props} >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children ? (
          children
        ) : data ? (
          <div dangerouslySetInnerHTML={{ __html: data }} />
        ) : (
          'Loading...'
        )}
      </Modal.Body>
   
    </Modal>
  );
}

export default ModalPopup;
