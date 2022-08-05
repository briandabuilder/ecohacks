import React from "react";
import { HashLink } from "react-router-hash-link";
import { Button, Card, Container, Row, Col, Badge } from "react-bootstrap";

import FadeIn from "react-fade-in";

function Sponsors() {
    return (
      <div id="sponsors" className="my-5">

            <section className="mt-2">
              <Container>
                <Card id="information" className="bg-gradient-gray-dark shadow-lg border-0">
                  <div className="p-4">
                    <a href="mailto:eco.hacks.22@gmail.com" style={{textDecoration:"none"}}>
                      <Row className="align-items-center glass p-3">
                        <Col lg="8">
                            <h3 className="text-white">
                              Sponsors/Partnerships
                            </h3>
                            <p className="text-font lead text-white mt-3">
                              Interested in sponsoring? Questions? Get in touch!
                            </p>
                        </Col>
                        <Col className="ml-lg-auto" lg="3">
                            <div className="btn btn-outline-success">
                              Contact Us
                            </div>
                        </Col>
                      </Row>
                    </a>
                  </div>
                </Card>
              </Container>
            </section>

            <div className="d-flex flex-column align-items-center mx-3">
            {/*<div className="m-1 my-5" style={{ color: "#FFD700", fontFamily: "Amatic SC, cursive", fontSize: "4rem", textShadow: "0 0 25px #FFD700" }}>
                    Gold Sponsors
            </div>
            <FadeIn className="d-flex flex-row flex-wrap justify-content-around mb-3">
                <a href="https://www.wolfram.com/language/" target="_blank">
                    <img
                        src={require("../images/sponsor/wolfram.png")}
                        className="zoom sponsor"
                        alt="..."
                    />
                </a>
            </FadeIn>*/}


            {/*    <div className="m-1 my-5" style={{ color: "#C0C0C0", fontFamily: "Amatic SC, cursive", fontSize: "4rem", textShadow: "0 0 25px #C0C0C0" }}>
                    Silver Sponsors
                </div>
                <FadeIn className="d-flex flex-row flex-wrap justify-content-center mb-3">
                    <a href="https://via.placeholder.com/200x200.png?text=TBD" target="_blank">
                        <img
                            src={require("../images/sponsor/wolfram.png")}
                            className="zoom sponsor"
                            alt="..."
                        />
                    </a>
                </FadeIn>
            */}

            {/*<div className="m-1 my-5" style={{ color: "#CD7F32", fontFamily: "Amatic SC, cursive", fontSize: "4rem", textShadow: "0 0 25px #CD7F32" }}>
               Bronze Sponsors
            </div>
            <FadeIn className="d-flex flex-row flex-wrap justify-content-center mb-3">
                <a href="https://artofproblemsolving.com/store" target="_blank">
                    <img
                        src={require("../images/sponsor/aops.png")}
                        className="zoom sponsor"
                        alt="..."
                    />
                </a>
            </FadeIn>*/}

            <div className="m-1 my-5" style={{ color: "#6E6865", fontFamily: "Amatic SC, cursive", fontSize: "4rem", textShadow: "0 0 25px #6E6865" }}>
               General Sponsors
            </div>
            <FadeIn className="d-flex flex-column justify-content-center mb-3">
                <a href="https://www.wolfram.com/language/" target="_blank">
                    <img
                        src={require("../images/sponsor/wolfram.png")}
                        className="zoom sponsor mb-5"
                        alt="..."

                    />
                </a>
                <a href="https://console.echo3d.co/#/auth/register-promo?code=EcoHacks" target="_blank">
                    <img
                        src={require("../images/sponsor/echo3d.png")}
                        className="zoom sponsor mb-5"
                        alt="..."
                    />
                </a>
                <a href="https://artofproblemsolving.com/store" target="_blank">
                    <img
                        src={require("../images/sponsor/aops.png")}
                        className="zoom sponsor"
                        alt="..."
                    />
                </a>
            </FadeIn>

            <div className="m-1 my-5" style={{ color: "#A7E1A7", fontFamily: "Amatic SC, cursive", fontSize: "4rem", textShadow: "0 0 25px #A7E1A7" }}>
                Partners
            </div>
            <FadeIn className="d-flex flex-row flex-wrap justify-content-center mb-3">
                <a href="https://hackclub.com/" target="_blank">
                    <img
                        src={require("../images/sponsor/hackclub.png")}
                        className="zoom sponsor"
                        alt="..."
                    />
                </a>
            </FadeIn>
            
            </div>
            <span><br /></span>
            <span><br /></span>
=      </div>
    );
}

export default Sponsors;