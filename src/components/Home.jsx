import React from 'react';
import '../App.css';

import Carousel from 'react-bootstrap/Carousel';

import stockOne from "../images/environmental-engineering.jpg";


function Home() {
  return (
    <div id="home" className="pb-5">
          <Carousel style={{ backgroundColor: "#A7E1A7" }}>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="https://via.placeholder.com/800x500.png?text=insert+inspiring+custom+flyer+here+1"
                      alt="First slide"
                      style={{ maxHeight: "500px", minWidth: "auto", objectFit: "none" }}
                  />
                  <Carousel.Caption style={{ color: "#90745E", fontFamily: "Amatic SC, cursive"}}>
                      <h3 style={{fontSize:"3em"}}>Our Mission</h3>
                      <p style={{ fontSize: "2em" }}>Through EcoHacks, we aim to connect an interest <br />
                          in saving the environment with coding for it. <br />
                          Let's code with purpose! <br />
                      </p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="https://via.placeholder.com/800x500.png?text=insert+inspiring+custom+flyer+here+2"
                      alt="Second slide"
                      style={{ maxHeight: "500px", minWidth: "auto", objectFit: "none" }}
                  />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src="https://via.placeholder.com/800x500.png?text=insert+inspiring+custom+flyer+here+3"
                      alt="Third slide"
                      style={{ maxHeight: "500px", minWidth: "auto", objectFit: "none" }}
                  />
              </Carousel.Item>
          </Carousel>
    </div>
  );
}

export default Home;
