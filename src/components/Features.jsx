import React from 'react';
import '../index.css';

import Card from 'react-bootstrap/Card';
import FadeIn from "react-fade-in";

function Features() {
  return (
    <div id="features">
          <FadeIn className="d-flex justify-content-center flex-wrap w-100 p-3 my-5 pb-5" >
              <Card style={{ width: '18rem' }} className="border-0 m-5">
                  <Card.Img variant="top" src="plant-icon.svg" style={{ maxHeight: "17em" }}/>
                  <Card.Body className="d-flex flex-column align-items-center mt-4">
                      <Card.Title className="title-font">Preservate.</Card.Title>
                      <Card.Text className="text-font" style={{textAlign: "center" }}>
                          The environment is our economy.
                          Join us in preserving our planet
                          and maintaining our climate.
                      </Card.Text>
                  </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="border-0 m-5">
                  <Card.Img variant="top" src="computer-icon.svg" style={{ maxHeight: "17em", position: "relative", top:"2.5em" }}/>
                  <Card.Body className="d-flex flex-column align-items-center mt-4">
                      <Card.Title className="title-font">Innovate.</Card.Title>
                      <Card.Text className="text-font"  style={{textAlign: "center" }}>
                          Come to our hackathon and use your
                          skills to turn your concepts
                          to ideas, ideas to code, and code
                          to application.
                      </Card.Text>
                  </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="border-0 m-5">
                  <Card.Img variant="top" src="team-icon.svg" style={{ maxHeight: "17em", position: "relative", top: "1em"  }}/>
                  <Card.Body className="d-flex flex-column align-items-center mt-4">
                      <Card.Title className="title-font">Collaborate.</Card.Title>
                      <Card.Text className="text-font"  style={{textAlign: "center" }}>
                          Connect with others. Learn
                          and grow together. Teamwork
                          makes the dream work.
                      </Card.Text>
                  </Card.Body>
              </Card>
          </FadeIn>
    </div>
  );
}

export default Features;
