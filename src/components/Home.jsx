import React from 'react';
import '../App.css';

import { Carousel, Col, Row, Container, Badge } from 'react-bootstrap';

import stockOne from "../images/environmental-engineering.jpg";


function Home() {
  return (
    <div id="home" className="pb-5">
          <Carousel id="carousel" style={{ backgroundColor: "#A7E1A7" }}>
              <Carousel.Item className="pb-5 pt-3">
                    <img
                        alt="..."
                        className="img-fluid shadow shadow-lg blur"
                        style={{ width: "100vw", maxHeight: "25em", objectFit: "cover" }}
                        src="https://images.unsplash.com/photo-1617540021016-72023b487e99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                    />

                  <Carousel.Caption className="border" style={{ color: "#FFF", bottom: "30%", textShadow: "0 0 25px #FFF", width: "25em", margin:"auto", borderRadius: "1em/1em"}}>
                      <h3 className="title-font">Our Mission</h3>
                      <p className="text-font px-3 pt-2">Through EcoHacks, we aim to connect an interest
                          in saving the environment with coding for it.
                          Let's code with purpose!
                      </p>
                  </Carousel.Caption>

              </Carousel.Item>
              <Carousel.Item className="pb-5 pt-4">
                  <Container style={{ minHeight: "25em" }}>
                      <Row className="row-grid align-items-center">
                          <Col className="order-lg-2" lg="6">
                              <img
                                  alt="..."
                                  className="img-fluid floating shadow shadow-lg"
                                  style={{ width: "100vw", maxHeight: "50vh", objectFit: "cover", borderRadius: "4em/4em" }}
                                  src="https://images.unsplash.com/photo-1569163139394-de4e5f43e5ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                              />
                          </Col>

                          <Col className="order-lg-1 mt-5 px-3" lg="6">
                              <div className="pl-lg-5">
                                  <h3 className="title-font">Issues That Plague Our Environment</h3>
                                  <p className="text-font mt-3">
                                      Ten million hectares of forest are lost every year.
                                      Global temperatures are expected to rise 1.5 degrees in the
                                      next two decades and anywhere from 3 to 12 degrees by 2100.
                                      One-third of coral reefs have died off and over 12,000 species
                                      are threatened with extinction...
                                  </p>
                              </div>
                          </Col>
                      </Row>
                  </Container>
              </Carousel.Item>

              <Carousel.Item className="pb-5 pt-4">
                  <Container style={{ minHeight: "25em" }}>
                      <Row className="row-grid align-items-center">
                          <Col className="order-lg-1" lg="6">
                              <img
                                  alt="..."
                                  className="img-fluid floating shadow shadow-lg"
                                  style={{ width: "100vw", maxHeight: "50vh", objectFit: "cover", borderRadius: "4em/4em" }}
                                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
                              />
                          </Col>

                          <Col className="order-lg-2 mt-5 px-3" lg="6">
                              <div className="pr-lg-5">
                                  <h3 className="title-font">Calling All High School Developers!</h3>
                                  <p className="text-font mt-3">
                                      With the deterioration of the ecosystem, the next
                                      generation of developers needs to step up to the plate
                                      and combine a love for technology with a desire to
                                      solve global challenges. Sign up for Eco Hacks and
                                      be the change you wish to see!
                                  </p>
                              </div>
                          </Col>
                      </Row>
                  </Container>
              </Carousel.Item>
          </Carousel>
    </div>
  );
}

export default Home;
