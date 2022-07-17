import React from 'react';
import '../index.css';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FadeIn from "react-fade-in";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

function Prizes() {
  return (
    <div>
      <div className="d-flex flex-column align-items-center my-5">
        <Container>
          <Row className="shadow d-flex m-0 p-0">
            <Row className="title-font m-0 p-0">
              <div className="text-center p-3" style={{ textShadow: "0 0 25px #90745E", color: "#90745E", backgroundColor: "#A7E1A7"}}>
                Hackathon Format
              </div>
            </Row>
            <Row id="information" className="m-0 p-0">
              <Col lg={5} className="border p-0">
                <Card className="p-3 border-0 rounded-0" style={{height:"100%"}}>
                  <Card.Title className="title-font px-3">Rules</Card.Title>
                  <Card.Text className="text-font p-3">
                    Our hackathon runs online from 9/3 - 9/5.
                    Anyone age 13 and up who are interested in learning about coding and environmental issues are allowed to participate.
                    Each participant can form a team of 1 to 4 people.
                    Teams will be given a theme at the start of the hackathon, where
                    they will use to develop a project through the medium of their choice.
                    At the end, each team should attach a GitHub link to their product as well as
                    a video presentation describing the product and its purpose.
                    Open sourced packages are permitted, but no code should be written prior to the hackathon.
                  </Card.Text>
                </Card>
              </Col>
              <Col lg={7} className="border p-0">
                <Card className="p-3 border-0 border-bottom rounded-0">
                  <Card.Title className="title-font px-3">Prizes</Card.Title>
                  <Card.Text className="text-font p-3">
                    <Badge bg="secondary">1st Place</Badge>{" "}
                    $200 cash value <br />
                    <Badge bg="secondary">2nd Place</Badge>{" "}
                    $150 cash value <br />
                    <Badge bg="secondary">3rd Place</Badge>{" "}
                    $100 cash value <br />
                    <Badge bg="secondary">Honorable Mentions</Badge>{" "}
                    $50 cash value <br />
                    Additional Prizes TBD [Subject to change]
                  </Card.Text>
                </Card>
                <Card className="p-3 border-0 rounded-0">
                  <Card.Title className="title-font px-3">Judging</Card.Title>
                  <Card.Text className="text-font p-3">
                    <Badge bg="secondary">Uniqueness</Badge>{" "}
                    Is the idea creative and innonative? <br />
                    <Badge bg="secondary">Design</Badge>{" "}
                    Is the layout well planned? <br />
                    <Badge bg="secondary">Viability</Badge>{" "}
                    Demonstrate a real solution to a real problem? <br />
                    <Badge bg="secondary">Impact</Badge>{" "}
                    Have the potential to be expanded to a larger audience? <br />
                    <Badge bg="secondary">Presentation</Badge>{" "}
                    Was the presentation clear and well spoken?
                  </Card.Text>
                </Card>
                </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Prizes;
