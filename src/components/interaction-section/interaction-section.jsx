import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ImageModalSection from "../image-modal-section/image-modal-section";
import CountingSection from "../counting-section/counting-section";
import TextInputSection from "../text-input-section/text-input-section";

function InteractionSection() {
  return (
    <>
      <Row>
        <Col>
          <CountingSection />
        </Col>
        <Col>
          <TextInputSection />
        </Col>
        <Col>
          <ImageModalSection />
        </Col>
      </Row>
    </>
  );
}

export default InteractionSection;
