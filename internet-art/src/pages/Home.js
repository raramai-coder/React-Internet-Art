import React from "react";
import TriHeader from "../components/TriHeader";
import NavBar from "../components/NavBar";
import AIExhibit from "../components/AIExhibit";
import About from "../components/About";
import BlogHero from "../components/BlogHero";
import DesignHero from "../components/DesignHero";
import CreateHero from "../components/CreateHero";

const Home = () => {
	return (
		<div className="container">
			<NavBar />
			<TriHeader />
			<AIExhibit />
			<About />
			<BlogHero />
			<DesignHero />
			<CreateHero />
		</div>
	);
};

export default Home;
