import React from "react";
import Container from "react-bootstrap/Container";
import AppDetails from "../../components/app-details/app-details";
import InteractionSection from "../../components/interaction-section/interaction-section";

import packageJson from "../../../package.json";

function HomePage() {
  return (
    <Container>
      <h4 style={{ margin: "20px" }}>Hi this is the Home Page!</h4>
      <h5 style={{ margin: "20px" }}>App Info</h5>
      <AppDetails appVersion={packageJson.version} />
      <h5 style={{ margin: "20px" }}>Some things to do clicky with</h5>
      <InteractionSection />
    </Container>
  );
}

export default HomePage;
