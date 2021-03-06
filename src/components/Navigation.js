import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

class Navigation extends Component {
	render() {
		return (
			<div>
				<Navbar
					bg="dark"
					variant="dark"
					sticky="top"
					expand="md"
					collapseOnSelect
				>
					<Navbar.Toggle />

					<Navbar.Collapse>
						<Nav>
							<Nav.Link href="/"> Home </Nav.Link>
							<Nav.Link href="tweets"> Tweets </Nav.Link>
							<Nav.Link href="emails"> Emails </Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Navigation;
