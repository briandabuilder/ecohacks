import React from 'react';
import '../App.css';

function Home() {
  return (
    <div id="home">
      <section class="colored-section home-section">
        <div id="slides" class="carousel slide" data-ride="carousel" data-interval="false">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="first-slide-text">
                <h1 class="first-slide-title">Our Mission</h1>
                <h3 class="first-slide-description">
                  Through EcoHacks, we aim to connect an interest <br />
                  in saving the environment with coding for it. <br />
                  Let's code with purpose! <br />
                </h3>
              </div>
              <img class="first-slide-image" src="logo.png" alt="First slide" />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Home;
