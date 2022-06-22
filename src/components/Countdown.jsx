import React from 'react';
import '../index.css';

function Countdown() {
  return (
    <div id="countdown">
      <section class="countdown-section">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <center><h1 class="countdown-title">Live Countdown</h1></center>
              <div class="countdown-timer">
                <h1 id="days"></h1>
                <h1 id="hours"></h1>
                <h1 id="minutes"></h1>
                <h1 id="seconds"></h1>
              </div>
              <div class="date-object">
                <h3 class="date-title">&nbsp;Days</h3>
                <h3 class="date-title">&nbsp;&nbsp;&nbsp;Hours</h3>
                <h3 class="date-title">&nbsp;Minutes</h3>
                <h3 class="date-title">Seconds</h3>

                <img class="highlight-background first-highlight" src="highlight.png" />
                <img class="highlight-background second-highlight" src="highlight.png" />
                <img class="highlight-background third-highlight" src="highlight.png" />
                <img class="highlight-background fourth-highlight" src="highlight.png" />
              </div>
            </div>

            <div class="carousel-item">
                <center><h1 class="countdown-event-title">Our Event</h1></center>
                <center><h1 class="countdown-event-attribute">Date: </h1></center>
                <center><h1 class="countdown-event-attribute">Time: </h1></center>
                <center><a href="#" class="countdown-event-attribute register-button">Sign Up</a></center>
            </div>


          </div>

          <div id="wrapper">
          <a class="carousel-control-prev prev-next-button previous-button" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next prev-next-button next-button" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

        </div>
      </section>


    </div>
  );
}

export default Countdown;
