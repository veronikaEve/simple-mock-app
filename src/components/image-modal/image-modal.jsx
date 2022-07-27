import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function ImageModal(props) {
  const { show, onHide, onShow, imageUrl, getCat } = props;

  return (
    <Modal show={show} onHide={onHide} size="md" data-testid="cat-image-modal">
      <Modal.Header closeButton>
        <Modal.Title>Hello</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image fluid={true} src={imageUrl} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onShow}>
          Close
        </Button>
        <Button variant="primary" onClick={getCat}>
          New cat!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ImageModal;
