import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal({ handleClose, id, handleRemove }) {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Delete table {id}.</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Are you sure you want to delete the table?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} >Close</Button>
        <Button variant="danger" onClick={handleRemove}>Delete</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default DeleteModal;