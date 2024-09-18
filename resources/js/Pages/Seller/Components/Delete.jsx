import Modal from 'react-bootstrap/Modal';

export default function Delete({deleteAction, deleteId, setShowDelete, handleClose, showDelete}){

    return (
        <>
            <Modal show={showDelete} onHide={handleClose} centered animation={false}>
                <Modal.Header closeButton className='border-0'>
                    <Modal.Title className='text-danger'>Hold on!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='border-0 py-0'>
                    <div className='text-md'>Are you sure want to delete? this action is non reversible</div>
                </Modal.Body>
                <Modal.Footer className='border-0'>
                    <div className="row g-5">
                        <div className="col-12 mt-0 text-end">
                            <button onClick={(e) => setShowDelete(false)} type="submit" className="btn btn-light me-2">No, cancel</button>
                            <button onClick={(e) => deleteAction(deleteId)} type="submit" className="btn btn-danger">Yes, continue</button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}