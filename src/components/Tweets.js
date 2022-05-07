import React, { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const { Configuration, OpenAIApi } = require("openai");

class Tweets extends Component {
	constructor() {
		super();
		this.state = {
			heading: "The response from the API will be shown here",
			response: "....await the response",
		};
	}

	onFormSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target),
			formDataObj = Object.fromEntries(formData.entries());

		this.setState({
			heading: `AI Tweet suggestion about: ${formDataObj.topic}`,
			response: `The Response from OpenAI API will be shown here`,
		});
	};
	render() {
		return (
			<div>
				<h1>🐦 Generate Tweets 🐦</h1>
				<h2>
					{" "}
					Enter a topic and have some AI generate a tweet for you!
				</h2>

				<Form onSubmit={this.onFormSubmit}>
					<Form.Group className="mb-3">
						<Form.Label>
							{" "}
							What would you like to tweet about?
						</Form.Label>
						<Form.Control
							type="text"
							name="tweettopic"
							placeholder="Enter a Topic"
						></Form.Control>
						<Form.text className="text-muted">
							Enter a topic about whatever you would like.
						</Form.text>
					</Form.Group>

					<Button variant="primary" size="lg" type="submit">
						🤖 Get AI Suggestions
					</Button>
				</Form>

				<Card>
					<Card.Body>
						<Card.Title>
							{" "}
							<h1> {this.state.heading} </h1>
						</Card.Title>
						<hr />
						<br />
						<Card.text>
							<h4>{this.state.response}</h4>
						</Card.text>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default Tweets;
