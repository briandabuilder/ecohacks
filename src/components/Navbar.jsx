import React from 'react';
import '../index.css';

import { default as NavbarReact }  from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';

import { ReactComponent as Logo } from "../images/logo.svg";

function Navbar() {
	return (
		<NavbarReact expand="lg" sticky="top" className="py-1 d-flex justify-content-around" style={{ backgroundColor: "#A7E1A7" }}>
			<NavbarReact.Brand class="navbar-title" style={{ color: "#90745E", fontFamily: "Amatic SC, cursive", fontSize: "3rem", textShadow: "0 0 25px #90745E" }}>
				<Logo style={{ width: "2em", height: "2em"}} />
				  EcoHacks
			  </NavbarReact.Brand>
			  <NavbarReact.Toggle aria-controls="basic-navbar-nav" />

			  <div className="">
				  <NavbarReact.Collapse aria-controls="basic-navbar-nav">
					  <Nav className="me-auto d-flex justify-content-between align-items-center">
						  <a href="#home" class="normal-item p-1 mx-3">Home</a>
						  <a href="#format" class="normal-item p-1 mx-3">Event</a>
						  <a href="#schedule" class="normal-item p-1 mx-3">Schedule</a>
						  <a href="#faq" class="normal-item p-1">FAQ</a>
						  <a href="#sponsors" class="normal-item p-1 mx-3">Sponsors</a>
						  <a href="https://docs.google.com/forms/d/1mnCf0pqTDSTQQx-X36CgLRPmkJywyLakiCK7GU5WaK0/edit" class="join-button px-1 mx-3">Join Us</a>
					  </Nav>
				  </NavbarReact.Collapse>
			  </div>
	</NavbarReact>
  );
}

export default Navbar;
