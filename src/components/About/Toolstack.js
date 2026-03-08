import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import ps from "../../Assets/TechIcons/adobe-photoshop-icon.svg";
import ap from "../../Assets/TechIcons/adobe-premiere-pro-icon.svg";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={ps} alt="Photoshop" className="tech-icon-images" />
        <div className="tech-icons-text">Photoshop</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={ap} alt="Premier pro" className="tech-icon-images" />
        <div className="tech-icons-text">Premier Pro</div>
      </Col>


    </Row>
  );
}

export default Toolstack;
