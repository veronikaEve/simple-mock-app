import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AppDetails() {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header style={{ backgroundColor: "cornsilk" }}>
            Commit Hash
          </Card.Header>
          <Card.Body>
            <Card.Text>The current commit hash of this app is</Card.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: "end" }} data-testid="commit-hash">
            abc1234
          </Card.Footer>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Header style={{ backgroundColor: "cornsilk" }}>
            App Version
          </Card.Header>
          <Card.Body>
            <Card.Text>The current version of this app is</Card.Text>
          </Card.Body>
          <Card.Footer style={{ textAlign: "end" }} data-testid="app-version">
            v1.0.0
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
}

export default AppDetails;
