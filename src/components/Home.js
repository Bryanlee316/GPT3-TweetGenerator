import React, { Component } from "react";
import Card from "./Card";

class Home extends Component {
	render() {
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
				}}
			>
				<Card
					title="Tweets"
					icon="🐦"
					text="Do you have trouble coming up with your own tweets? Do you want to be like Elon Musk and make some amazing tweets to “update” your friends.

Well you’re in luck! Use our tweet generator to help you make new friends on Twitter and generate tweets for you!"
					link="/tweets"
				/>

				<Card
					title="Emails"
					icon="✉️"
					text="Are you bad at writing emails? Well I am too. Use this email generator to write your emails for you!"
					link="/emails"
				/>
			</div>
		);
	}
}

export default Home;
