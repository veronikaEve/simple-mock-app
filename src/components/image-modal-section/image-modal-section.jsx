import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ImageModal from "./image-modal";

function ImageModalSection() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <Card data-testid="modal-invoke-section">
        <Card.Body>
          <Card.Text>Need a smile? Get a cat!</Card.Text>
          <Button variant="secondary" onClick={() => setShowOverlay(true)}>
            Get cat
          </Button>
        </Card.Body>
        <Card.Footer style={{ textAlign: "end" }} data-testid="app-version">
          I hope you like your cat
        </Card.Footer>
      </Card>
      <ImageModal show={showOverlay} onHide={() => setShowOverlay(false)} />
    </>
  );
}

export default ImageModalSection;
