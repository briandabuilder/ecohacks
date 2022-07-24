import React from 'react';
import '../index.css';

import { default as NavbarReact }  from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { HashLink } from "react-router-hash-link";

import { ReactComponent as Logo } from "../images/logo.svg";

function Navbar() {
	return (
		<NavbarReact expand="lg" sticky="top" className="py-1 d-flex justify-content-around" style={{ backgroundColor: "#A7E1A7" }}>
			<NavbarReact.Brand className="navbar-title" style={{ color: "#90745E", fontFamily: "Amatic SC, cursive", fontSize: "3rem", textShadow: "0 0 25px #90745E" }}>
				<HashLink to="/#home" style={{all:"unset", cursor: "pointer"}}>
					<Logo style={{ width: "2em", height: "2em" }} />
					<span className="">EcoHacks</span>
				</HashLink>
			</NavbarReact.Brand>
			<NavbarReact.Toggle aria-controls="basic-navbar-nav" />

			<div>
				<NavbarReact.Collapse aria-controls="basic-navbar-nav">
					<Nav className="me-auto d-flex justify-content-between align-items-center">
						<HashLink to="/#format" class="normal-item p-1 mx-3">Event</HashLink>
						<HashLink to="/#schedule" class="normal-item p-1 mx-3">Schedule</HashLink>
						<HashLink to="/#faq" class="normal-item p-1">FAQ</HashLink>
						<HashLink to="/about-us" class="normal-item p-1 mx-3">About</HashLink>
						<HashLink to="/#sponsors" class="normal-item p-1 mx-3">Sponsors</HashLink>
						<a href="https://forms.gle/HKJTQSRCJ5hcS1288" target="_blank" class="join-button normal-item px-1 mx-3">Join Us</a>
					</Nav>
				</NavbarReact.Collapse>
			</div>
	</NavbarReact>
  );
}

export default Navbar;
