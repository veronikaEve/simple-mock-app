import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function ImageModal(props) {
  const { show, onHide, imageUrl, getCat } = props;

  return (
    <Modal show={show} onHide={onHide} size="md" data-testid="cat-image-modal">
      <Modal.Header closeButton>
        <Modal.Title>Hello</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image fluid={true} src={imageUrl} data-testid="cat-image" />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide} data-testid="close-button">
          Close
        </Button>
        <Button variant="primary" onClick={getCat} data-testid="new-cat-button">
          New cat!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ImageModal;
