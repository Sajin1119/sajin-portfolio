import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import idukki from "../../Assets/Projects/idukki.png";
import personal1 from "../../Assets/Projects/personal1.png";
import knowspace from "../../Assets/Projects/knowspae.png";
import personal2 from "../../Assets/Projects/personal2.png";
import ecom from "../../Assets/Projects/ecom.png";
import mut from "../../Assets/Projects/mut.png";
import ibw from "../../Assets/Projects/ibw.png";
import doc from "../../Assets/Projects/doctor.png";
import epsilon from "../../Assets/Projects/epsilon.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  {/* Idukki Gold */}
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={idukki}
      isBlog={false}
      title="Idukki Gold"
      description="A specialized web project focused on clean UI and responsive design, showcasing a Kerala restaurant in Toronto through HTML, CSS, Bootstrap, and JavaScript.."
      ghLink="https://github.com/Sajin1119/idukki"
      demoLink="https://sajin1119.github.io/idukki/"
    />
  </Col>

  {/* Sajin Orange */}
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={personal1}
      isBlog={false}
      title="Sajin Personal"
      description="A specialized web project focused on clean UI and responsive design, showcasing a personal developer portfolio built with HTML, CSS, Bootstrap, and JavaScript."
      ghLink="https://github.com/Sajin1119/sajin-orange"
      demoLink="https://sajin1119.github.io/sajin-orange/"
    />
  </Col>

  {/* Knowspace */}
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={knowspace}
      isBlog={false}
      title="Knowspace"
      description="A specialized web project focused on clean UI and responsive design, showcasing a professional development company site built with HTML, CSS, Bootstrap, and JavaScript."
      ghLink="https://github.com/Sajin1119/knowspace"
      demoLink="https://sajin1119.github.io/knowspace/"
    />
  </Col>

  {/* ResJS */}
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={ecom}
      isBlog={false}
      title="E-com Frontend"
      description="A specialized web project focused on clean UI and responsive design, showcasing a modern E-commerce frontend built with HTML, CSS, Bootstrap, and JavaScript."
      ghLink="https://github.com/Sajin1119/resjs"
      demoLink="https://sajin1119.github.io/resjs/"
    />
  </Col>

  {/* Mala */}
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={mut}
      isBlog={false}
      title="Mala Uthuru Traders"
      description="A specialized web project focused on clean UI and responsive design, showcasing a professional logistics and trading platform for Mala Uthuru Traders in the Maldives."
      ghLink="https://github.com/Sajin1119/mala"
      demoLink="https://sajin1119.github.io/mala/"
    />
  </Col>

  {/* IBW */}
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={ibw}
      isBlog={false}
      title="IBW SHOP"
      description="A specialized web project focused on clean UI and responsive design, showcasing a professional logistics and trading platform for IBW in the Maldives."
      ghLink="https://github.com/Sajin1119/ibw"
      demoLink="https://sajin1119.github.io/ibw/"
    />
  </Col>


  {/* Doctor */}
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={doc}
      isBlog={false}
      title="Doctor Personal"
      description="A specialized web project focused on clean UI and responsive design, showcasing a professional doctor’s portfolio built with HTML, CSS, Bootstrap, and JavaScript."
      ghLink="https://github.com/Sajin1119/doctor"
      demoLink="https://sajin1119.github.io/doctor/"
    />
  </Col>

  {/* Personal */}
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={personal2}
      isBlog={false}
      title="Sajin Personal~"
      description="My custom-built professional landing page highlighting my technical skills in Python, Django, and React."
      ghLink="https://github.com/Sajin1119/personal"
      demoLink="https://sajin1119.github.io/personal/"
    />
  </Col>

  {/* Epsilon */}
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={epsilon}
      isBlog={false}
      title="Epsilon"
      description="A specialized web project focused on clean UI and responsive design, showcasing a personal developer portfolio built with HTML, CSS, Bootstrap, and JavaScript."
      ghLink="https://github.com/Sajin1119/epsilon"
      demoLink="https://sajin1119.github.io/epsilon/"
    />
  </Col>
</Row>
      </Container>
    </Container>
  );
}

export default Projects;
