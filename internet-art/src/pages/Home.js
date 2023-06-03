import React from "react";
import TriHeader from "../components/TriHeader";
import NavBar from "../components/NavBar";
import AIExhibit from "../components/AIExhibit";
import About from "../components/About";
import BlogHero from "../components/BlogHero";

const Home = () => {
	return (
		<div className="container">
			<NavBar />
			<TriHeader />
			<AIExhibit />
			<About />
			<BlogHero />
		</div>
	);
};

export default Home;
