import React, { useState } from "react";
import fetch from "isomorphic-fetch";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ImageModal from "./image-modal";

function ImageModalSection() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  async function getCat() {
    try {
      await fetch("https://api.thecatapi.com/v1/images/search")
        .then((res) => res.json())
        .then((data) => setImageUrl(data[0].url));
    } catch (err) {
      console.error("Something went wrong 😞", err);
    }
  }

  const onGetCatClick = () => {
    getCat();
    setShowOverlay(true);
  };

  return (
    <>
      <Card data-testid="modal-invoke-section">
        <Card.Body>
          <Card.Text>Need a smile? Get a cat!</Card.Text>
          <Button variant="secondary" onClick={() => onGetCatClick()}>
            Get cat
          </Button>
        </Card.Body>
        <Card.Footer style={{ textAlign: "end" }} data-testid="app-version">
          I hope you like your cat
        </Card.Footer>
      </Card>
      <ImageModal
        show={showOverlay}
        onHide={() => setShowOverlay(false)}
        imageUrl={imageUrl}
        getCat={getCat}
      />
    </>
  );
}

export default ImageModalSection;
