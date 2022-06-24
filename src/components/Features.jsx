import React from 'react';
import '../index.css';

import Card from 'react-bootstrap/Card';

function Features() {
  return (
    <div id="features">
          <div className="d-flex justify-content-around flex-wrap w-100 p-3 my-5" >
              <Card style={{ width: '18rem' }} className="border-0">
                  <Card.Img variant="top" src="plant-icon.svg" style={{ maxHeight: "17em" }}/>
                  <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Title style={{ fontFamily: "Amatic SC, cursive", fontSize: "3em" }}>Preservate.</Card.Title>
                      <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center" }}>
                          The environment is our economy.
                          Join us in preserving our planet
                          and maintaining our climate.
                      </Card.Text>
                  </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="border-0">
                  <Card.Img variant="top" src="computer-icon.svg" style={{ maxHeight: "17em", position: "relative", top:"2.5em" }}/>
                  <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Title style={{ fontFamily: "Amatic SC, cursive", fontSize: "3em" }}>Innovate.</Card.Title>
                      <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center" }}>
                          Come to our hackathon and use your
                          skills to turn your concepts
                          to ideas, ideas to code, and code
                          to application.
                      </Card.Text>
                  </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }} className="border-0">
                  <Card.Img variant="top" src="team-icon.svg" style={{ maxHeight: "17em", position: "relative", top: "1em"  }}/>
                  <Card.Body className="d-flex flex-column align-items-center">
                      <Card.Title style={{ fontFamily: "Amatic SC, cursive", fontSize: "3em" }}>Collaborate.</Card.Title>
                      <Card.Text style={{ fontFamily: "Open Sans, sans-serif", textAlign: "center" }}>
                          Connect with others. Learn
                          and grow together. Teamwork
                          makes the dream work.
                      </Card.Text>
                  </Card.Body>
              </Card>
          </div>
    </div>
  );
}

export default Features;
