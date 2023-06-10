import React from "react";
import TriHeader from "../components/TriHeader";
import NavBar from "../components/NavBar";
import AIExhibit from "../components/AIExhibit";
import About from "../components/About";
import BlogHero from "../components/BlogHero";
import DesignHero from "../components/DesignHero";
import CreateHero from "../components/CreateHero";
import ArtistsHero from "../components/ArtistsHero";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

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
			<ArtistsHero />
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default Home;
