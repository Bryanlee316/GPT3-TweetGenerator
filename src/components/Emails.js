import React, { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const { Configuration, OpenAIApi } = require("openai");

class Emails extends Component {
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
		console.log(formDataObj.topic);

		// OpenAI call

		const configuration = new Configuration({
			apiKey: "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",
		});
		const openai = new OpenAIApi(configuration);

		openai
			.createCompletion("text-davinci-002", {
				prompt: `Generate a tweet about: ${formDataObj.topic}`,
				temperature: 0.7,
				max_tokens: 256,
				top_p: 1,
				frequency_penalty: 0,
				presence_penalty: 0,
			})
			.then((response) => {
				this.setState({
					heading: `AI Tweet suggestion about: ${formDataObj.topic}`,
					response: `${response.data.choices[0].text}`,
				});
			});
	};
	render() {
		return (
			<div>
				<Container>
					<h1>✉️ Generate Cold Emails ✉️</h1>
					<h2>
						{" "}
						Enter a subject and have some AI generate a cold email
						for you!
					</h2>

					<Form onSubmit={this.onFormSubmit}>
						<Form.Group className="mb-3">
							<Form.Label>
								{" "}
								What would you like to email about?
							</Form.Label>
							<Form.Control
								type="text"
								name="topic"
								placeholder="Enter a Subject"
							></Form.Control>
							<Form.Text className="text-muted">
								Enter a topic about whatever you would like.
							</Form.Text>
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
							<Card.Text>
								<h4>{this.state.response}</h4>
							</Card.Text>
						</Card.Body>
					</Card>
				</Container>
			</div>
		);
	}
}

export default Emails;
