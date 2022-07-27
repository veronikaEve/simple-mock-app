import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import ImageModal from "../image-modal/image-modal";

function InteractionSection() {
  const [clickCount, setClickCount] = useState(0);
  const [desire, setDesire] = useState("");
  const [imageUrl, setImageUrl] = useState("https://cataas.com/cat/says/hello");
  const [showOverlay, setShowOverlay] = useState(false);

  async function getCat() {
    try {
      await fetch("https://cataas.com/cat/says/hello?json=true")
        .then((res) => res.json())
        .then((data) => setImageUrl("https://cataas.com" + data.url));
    } catch (err) {
      console.error("Something went wrong 😞", err);
    }
  }

  function onEnterPress(e) {
    if (e.key === "Enter") {
      setDesire(e.target.value);
    }
  }

  return (
    <>
      <Row>
        <Col>
          <Card data-testid="counting-section">
            <Card.Body>
              <Card.Text>Beep Boop Click This Button</Card.Text>
              <Button
                variant="secondary"
                onClick={() => setClickCount(clickCount + 1)}
              >
                Boop
              </Button>
            </Card.Body>
            <Card.Footer style={{ textAlign: "end" }} data-testid="click-count">
              You've clicked the button <b>{clickCount}</b> times
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card data-testid="text-input-section">
            <Card.Body>
              <Card.Text>What does your heart desire?</Card.Text>
              <Form.Control
                type="text"
                placeholder="Tell me your secrets"
                onKeyDown={(e) => onEnterPress(e)}
              />
            </Card.Body>
            <Card.Footer style={{ textAlign: "end" }} data-testid="text-output">
              {desire ? (
                <>
                  So you like <b>{desire}</b>... Interesting
                </>
              ) : (
                <>You didn't tell me anything</>
              )}
            </Card.Footer>
          </Card>
        </Col>
        <Col>
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
        </Col>
      </Row>
      <ImageModal
        show={showOverlay}
        onHide={() => setShowOverlay(false)}
        onShow={() => setShowOverlay(false)}
        imageUrl={imageUrl}
        getCat={getCat}
      />
    </>
  );
}

export default InteractionSection;
