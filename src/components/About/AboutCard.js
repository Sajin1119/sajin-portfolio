import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi everyone! I’m <span className="purple">SAJIN S</span>{" "}
        from <span className="purple">Trivandrum, India</span>.
        <br />
        I’m currently working as a{" "}
        <span className="purple">Full Stack Developer</span> at{" "}
        <span className="purple">DNI Networks</span>.
        <br />
        I hold a <span className="purple">Bachelor of Computer Applications (BCA)</span> from{" "}
        <span className="purple">Alagappa University, Karaikudi</span>.
        <br />
        <br />
        Outside of coding, I enjoy activities that keep me creative and inspired:
      </p>

      <ul>
        <li className="about-activity">
          <ImPointRight /> Exploring Web Development Projects 💻
        </li>
        <li className="about-activity">
          <ImPointRight /> Traveling and discovering new places 🌍
        </li>
      </ul>

      <p style={{ color: "rgb(155 126 172)" }}>
        "Strive to build things that make a difference!"{" "}
      </p>
      <footer className="blockquote-footer">SAJIN</footer>

      <br />
      <p>
        📞 <span className="purple">+91 9605404478</span> | 📧 <span className="purple">sajinsatheesan06@gmail.com</span>
      </p>
    </blockquote>
  </Card.Body>
</Card>
  );
}

export default AboutCard;
