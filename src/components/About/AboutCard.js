import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view ">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-header">M Affan Butt</span> from Rawalpindi, Islamabad, Pakistan. I am a Software Engineer graduate and a passionate programmer with Professional Testing and Project Management Skills .
            <br />
            <br />
            In addition to coding, here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Making Tech Related Post  
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Reading Books
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing Games
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Travelling and Exploring
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
