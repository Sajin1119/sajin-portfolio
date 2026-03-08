import React from "react";
import { Col, Row } from "react-bootstrap";


import Javascript from "../../Assets/TechIcons/Javascript.svg";

import ReactIcon from "../../Assets/TechIcons/React.svg";

import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";

import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";


import Html from "../../Assets/TechIcons/html-icon.svg";
import css from "../../Assets/TechIcons/css-icon.svg";
import bootstrap from "../../Assets/TechIcons/bootstrap-5-logo-icon.svg";
import angular from "../../Assets/TechIcons/angular-icon.svg";
import dajngo from "../../Assets/TechIcons/django-icon.svg";
import djangorest from "../../Assets/TechIcons/DjangoREST.svg";
import mysql from "../../Assets/TechIcons/mysql-icon.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons text-center">
        <img
          src={Html}
          alt="HTML"
          style={{
            width: "20px", 
            maxWidth: "100%",
          }}
          className="d-block mx-auto mx-md-0" // centers on mobile, normal on md+
        />
        <div className="tech-icons-text">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons text-center">
        <img
          src={css}
          alt="css"
          style={{
            width: "20px", 
            maxWidth: "100%",
          }}
          className="d-block mx-auto mx-md-0" // centers on mobile, normal on md+
        />
        <div className="tech-icons-text">CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons text-center">
        <img
          src={bootstrap}
          alt="bootstrap"
          style={{
            width: "20px", 
            maxWidth: "100%",
          }}
          className="d-block mx-auto mx-md-0" // centers on mobile, normal on md+
        />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons text-center">
        <img
          src={angular}
          alt="angular"
          style={{
            width: "20px", 
            maxWidth: "100%",
          }}
          className="d-block mx-auto mx-md-0" // centers on mobile, normal on md+
        />
        <div className="tech-icons-text">Angular</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>



      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>


      <Col xs={4} md={2} className="tech-icons text-center">
        <img
          src={dajngo}
          alt="dajngo"
          style={{
            width: "20px", 
            maxWidth: "100%",
          }}
          className="d-block mx-auto mx-md-0" // centers on mobile, normal on md+
        />
        <div className="tech-icons-text">Django</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons text-center">
        <img
          src={djangorest}
          alt="djangorest"
          style={{
            width: "20px", 
            maxWidth: "100%",
            background:"white"
          }}
          className="d-block mx-auto mx-md-0" // centers on mobile, normal on md+
        />
        <div className="tech-icons-text">Django Rest Framework</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons text-center">
        <img
          src={mysql}
          alt="mysql"
          style={{
            width: "20px", 
            maxWidth: "100%",
            background:"white"
          }}
          className="d-block mx-auto mx-md-0" // centers on mobile, normal on md+
        />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      

    </Row>
  );
}

export default Techstack;
