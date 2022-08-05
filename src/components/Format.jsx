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

function Format() {
  return (
    <div id="format">
      <div className="d-flex flex-column align-items-center my-5">
        <Container>
          <Row className="shadow d-flex m-0 p-0">
            <Row className="title-font m-0 p-0">
              <div className="text-center p-3" style={{ textShadow: "0 0 25px #90745E", color: "#90745E", backgroundColor: "#A7E1A7"}}>
                Hackathon Format
              </div>
            </Row>
            <Row className="m-0 p-0">
              <Row className="border p-0 m-0">
                <Card className="p-3 border-0 rounded-0" style={{height:"100%"}}>
                  <Card.Title className="title-font px-3">Rules</Card.Title>
                  <Card.Text className="text-font p-3">
                    Our hackathon runs online from 9/2 - 9/4.
                    Anyone age 13 and up who are interested in learning about coding and environmental issues are allowed to participate.
                    Each participant can form a team of 1 to 4 people.
                    Teams will be given a theme at the start of the hackathon, where
                    they will use to develop a project through the medium of their choice.
                    At the end, each team should attach a GitHub link to their product as well as
                    a video presentation describing the product and its purpose.
                    Open sourced packages are permitted, but no code should be written prior to the hackathon.
                  </Card.Text>
                </Card>
              </Row>
              <Row className="border p-0 m-0">
                <Col lg={6} className="border p-0 m-0">
                  <Card className="p-3 border-0 border-bottom rounded-0" style={{ height: "100%" }}>
                    <Card.Title className="title-font px-3">Prizes</Card.Title>
                    <Card.Text className="text-font p-3">
                      <Row className="py-2 mb-2" style={{ borderRadius: "1em/1em", border:"2px solid #DEE2E6"}}>
                        <Col sm={4}>
                          <Badge bg="success">1st Place</Badge>
                        </Col>
                        <Col>
                          <span className="badge" style={{ backgroundColor: "#65bf63", borderRadius: "0em/0em" }}>
                            $200 Cash Value
                          </span>{" "}
                          <span className="badge badge-pill" style={{ backgroundColor: "#65bf63", borderRadius: "2em/2em" }}>
                            Wolfram Award
                          </span>
                        </Col>
                        <div className="w-100"></div>
                        <Col sm={4}>
                          <Badge bg="success">2nd Place</Badge>
                        </Col>
                        <Col>
                          <span className="badge" style={{ backgroundColor: "#65bf63", borderRadius: "0em/0em" }}>
                            $150 Cash Value
                          </span>{" "}
                          <span className="badge badge-pill" style={{ backgroundColor: "#65bf63", borderRadius: "2em/2em" }}>
                            Wolfram Award
                          </span>
                        </Col>
                        <div className="w-100"></div>
                        <Col sm={4}>
                          <Badge bg="success">3rd Place</Badge>
                        </Col>
                        <Col>
                          <span className="badge" style={{ backgroundColor: "#65bf63", borderRadius: "0em/0em" }}>
                            $100 Cash Value
                          </span>{" "}
                          <span className="badge badge-pill" style={{ backgroundColor: "#65bf63", borderRadius: "2em/2em" }}>
                            Wolfram Award
                          </span>
                        </Col>
                        <div className="w-100"></div>
                        <Col sm={4}>
                          <Badge bg="success">Honorable Mentions</Badge>
                        </Col>
                        <Col>
                          <span className="badge" style={{ backgroundColor: "#65bf63", borderRadius: "0em/0em" }}>
                            $50 Cash Value x2
                          </span>{" "}
                        </Col>
                        <div className="w-100"></div>
                        <Col sm={4}>
                          <Badge bg="success">Raffles</Badge>
                        </Col>
                        <Col>
                          <span className="badge" style={{ backgroundColor: "#65bf63", borderRadius: "0em/0em" }}>
                            $25 AoPs Coupons x4
                          </span>{" "}
                        </Col>
                        <div className="w-100"></div>
                        <Col sm={4}>
                          <Badge bg="success">Participants</Badge>
                        </Col>
                        <Col>
                          <span className="badge" style={{ backgroundColor: "#65bf63", borderRadius: "2em/2em" }}>
                            Echo3D Business Plan 1 Month
                          </span>{" "}
                        </Col>
                      </Row>

                      <Row className="py-2 mb-2" style={{ borderRadius: "1em/1em", border: "2px solid #DEE2E6" }}>
                        <Col sm={4}>
                          <span className="badge" style={{ backgroundColor: "#198754", borderRadius: "2em/2em" }}>
                            Wolfram Award
                          </span>
                        </Col>
                        <Col>
                          <span className="badge" style={{ backgroundColor: "#65bf63", borderRadius: "2em/2em" }}>
                            Wolfram|One Personal Edition 1 Year
                          </span>{" "}
                          <span className="badge badge-pill" style={{ backgroundColor: "#65bf63", borderRadius: "2em/2em" }}>
                            Wolfram|Alpha Pro 1 Year
                          </span>
                        </Col>
                      </Row>

                      <div>
                        <span className="badge" style={{ backgroundColor: "#65bf63", borderRadius: "0em/0em" }}>
                          Per Team
                        </span>{" "}
                        <span className="badge badge-pill" style={{ backgroundColor: "#65bf63", borderRadius: "2em/2em" }}>
                          Per Participant
                        </span>
                      </div>
                      <br />
                      Current Total Prizes Evaluation: $9500 <br />
                      Additional Prizes TBD [Subject to change]
                    </Card.Text>
                  </Card>
                </Col>
                <Col lg={6} className="border p-0 m-0">
                  <Card className="p-3 border-0 rounded-0" style={{ height: "100%" }}>
                    <Card.Title className="title-font px-3">Judging</Card.Title>
                    <Card.Text className="text-font p-3">
                      <Row className="py-2 mb-2" style={{ borderRadius: "1em/1em", border: "2px solid #DEE2E6" }}>
                        <Col sm={3}>
                          <Badge bg="success">Uniqueness</Badge>
                        </Col>
                        <Col>
                          Is the idea creative and innovative?
                        </Col>
                        <div className="w-100"></div>
                        <Col sm={3}>
                          <Badge bg="success">Design</Badge>
                        </Col>
                        <Col>
                          Is the layout well planned?
                        </Col>
                        <div className="w-100"></div>
                        <Col sm={3}>
                          <Badge bg="success">Viability</Badge>
                        </Col>
                        <Col>
                          Demonstrate a real solution to a real problem?
                        </Col>
                        <div className="w-100"></div>
                        <Col sm={3}>
                          <Badge bg="success">Impact</Badge>
                        </Col>
                        <Col>
                          Can be adapted to a larger audience?
                        </Col>
                        <div className="w-100"></div>
                        <Col sm={3}>
                          <Badge bg="success">Presentation</Badge>
                        </Col>
                        <Col>
                          Was the presentation clear and well spoken?
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card>
                </Col>
              </Row>
            </Row>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Format;
