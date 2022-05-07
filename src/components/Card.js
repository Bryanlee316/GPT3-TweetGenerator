import React, { Component } from "react";
import { Nav, Button } from "react-bootstrap";

class Card extends Component {
	render() {
		const { title, text, link, icon } = this.props;
		return (
			<div>
				<div
					style={{
						background:
							"linear-gradient(48.33deg, #1DA1F2 0.47%, rgba(134, 82, 245, 0.51) 50.95%, rgba(231, 85, 255, 0.33) 98.37%)",
						height: "500px",
						width: "500px",
						margin: "30px",
						padding: "50px",
						borderRadius: "20px",
					}}
				>
					<h1> {title}</h1>
					<h2> {icon} </h2>

					<h4> {text} </h4>
					<Nav.Link href={link}>
						<Button> Get Started</Button>
					</Nav.Link>
				</div>
			</div>
		);
	}
}

export default Card;
