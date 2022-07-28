import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CountingSection() {
  const [clickCount, setClickCount] = useState(0);

  return (
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
  );
}

export default CountingSection;
