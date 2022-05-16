import React, { Component } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "../App.css";
import profile from "../profilepic.jpg";
import bottom from "../Bottom.png";

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
			<div className="main">
				<h1 className="title">🐦 Generate Tweets 🐦</h1>
				<h3 classNmae="subtitle">
					{" "}
					Enter a topic and have AI generate a tweet for you!
				</h3>

				<Form onSubmit={this.onFormSubmit}>
					<Form.Group className="mb-3">
						<Form.Label className="prompt">
							{" "}
							What would you like to tweet about?
						</Form.Label>
						<Form.Control
							type="text"
							name="topic"
							placeholder="Enter a Topic"
						></Form.Control>
						{/* <Form.Text className="text-muted">
								Enter a topic about whatever you would like.
							</Form.Text> */}
					</Form.Group>
					<div className="left">
						<Button
							variant="primary"
							size="lg"
							type="submit"
							className="button"
						>
							🤖 Get AI Suggestions
						</Button>
					</div>
				</Form>

				<Card>
					<Card.Body>
						<Card.Title>
							{" "}
							<h1 className="textleft"> {this.state.heading} </h1>
						</Card.Title>
						<hr />
						<br />
						{/* <Card.Text>
							<h4 className="textleft">{this.state.response}</h4>
						</Card.Text> */}
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<div
								style={{
									display: "flex",
									width: "500px",
									justifyContent: "space-between",
									border: "0.5px lightgrey solid",
									padding: "30px",
									flexDirection: "column",
								}}
							>
								<div>
									<div
										style={{
											display: "flex",
											justifyContent: "",
											flexDirection: "row",
											justifyContent: "space-between",
										}}
									>
										<div
											style={{
												display: "flex",
												flexDirection: "row",
											}}
										>
											<img
												src={profile}
												style={{
													width: "60px",
													height: "60px",
													borderRadius: "30px",
													marginRight: "20px",
												}}
											/>
											<div>
												<h6
													style={{
														textAlign: "left",
														paddingTop: "5px",
														fontWeight: "bold",
													}}
												>
													Name
												</h6>
												<h6
													style={{
														marginTop: "-5px",
														textAlign: "left",
													}}
												>
													{" "}
													@username
												</h6>
											</div>
										</div>
										<div
											style={{
												display: "flex",
												alignItems: "flex-start",
												marginTop: "-10px",
											}}
										>
											{" "}
											<h2> ... </h2>
										</div>
									</div>
								</div>
								<div
									style={{
										marginTop: "20px",
										marginLeft: "10px",
									}}
								>
									<h4 className="textleft">
										{this.state.response}
									</h4>
								</div>
								<img
									src={bottom}
									style={{
										width: "100%",
										marginLeft: "2px",
									}}
								/>
							</div>
						</div>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default Tweets;
