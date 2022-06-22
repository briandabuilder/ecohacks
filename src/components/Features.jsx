import React from 'react';
import '../index.css';

function Features() {
  return (
    <div id="features">
      <section class="feature-section white-section">
        <div id="features-division">
          <div class="first-feature">
            <img class="plant-icon" src="plant-icon.svg" alt="plant-image" />
            <h1 class="feature-title first-title">Preservate.</h1> 
            <p class="feature-text first-feature-text">
              The environment is our economy. <br />
              Join us in preserving our planet <br />
              and maintaining our climate. <br />
            </p>
          </div>
          <div class="second-feature">
            <img class="computer-icon" src="computer-icon.svg" alt="code-image" />
            <h1 class="feature-title second-title">Innovate.</h1>
            <p class="feature-text second-feature-text">
              Come to our hackathon and use your <br />
              skills to turn your concepts <br />
              to ideas, ideas to code, and code <br />
              to application. <br />
            </p>
          </div>
          <div class="third-feature">
            <img class="team-icon" src="team-icon.svg" alt="team-image" />
            <h1 class="feature-title third-title">Collaborate.</h1>
            <p class="feature-text third-feature-text">
              Connect with others. Learn <br />
              and grow together. Teamwork <br />
              makes the dream work. <br />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
