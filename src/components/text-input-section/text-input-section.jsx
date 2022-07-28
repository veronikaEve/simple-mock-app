import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function TextInputSection() {
  const [desire, setDesire] = useState("");

  function onEnterPress(e) {
    if (e.key === "Enter") {
      setDesire(e.target.value);
    }
  }

  return (
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
  );
}

export default TextInputSection;
