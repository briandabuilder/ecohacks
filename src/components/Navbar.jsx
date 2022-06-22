import React from 'react';
import '../index.css';

function Navbar() {
  return (
    <div>
      <section class="colored-section navbar-section">
        <label class="navbar-title"> EcoHacks <i class="fa-solid fa-leaf"></i></label>
        <nav>
          <a href="#home" class="normal-item">Home</a>
          <a href="#countdown" class="normal-item">Event</a>
          <a href="#sponsors" class="normal-item">Sponsors</a>
          <a href="#schedule" class="normal-item">Schedule</a>
          <a href="#faq" class="normal-item">FAQ</a>
          <a href="https://docs.google.com/forms/d/1mnCf0pqTDSTQQx-X36CgLRPmkJywyLakiCK7GU5WaK0/edit" class="join-button">Join Us</a>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
