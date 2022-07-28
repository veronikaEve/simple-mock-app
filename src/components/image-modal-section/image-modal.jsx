import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

function ImageModal(props) {
  const [imageUrl, setImageUrl] = useState("https://cataas.com/cat/says/hello");

  const { show, onHide } = props;

  async function getCat() {
    try {
      await fetch("https://cataas.com/cat/says/hello?json=true")
        .then((res) => res.json())
        .then((data) => setImageUrl("https://cataas.com" + data.url));
    } catch (err) {
      console.error("Something went wrong 😞", err);
    }
  }

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
