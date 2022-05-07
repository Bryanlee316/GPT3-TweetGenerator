import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Tweets from "./components/Tweets";
import Emails from "./components/Emails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/tweets" element={<Tweets />} />
					<Route path="/emails" element={<Emails />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
