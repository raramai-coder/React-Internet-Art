import React from "react";
import { useNavigate } from "react-router-dom";
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
import Button from "../components/Button";

const Home = () => {
	const navigate = useNavigate();

	const navigateToCreate = () => {
		navigate("/create");
	};

	const navigateToAbout = () => {
		navigate("/about");
	};

	const navigateToBlog = () => {
		navigate("/blog");
	};

	const navigateToDesign = () => {
		navigate("/design");
	};

	const navigateToArtists = () => {
		navigate("/artists");
	};

	return (
		<div className="container">
			<NavBar />
			<TriHeader />
			<AIExhibit />
			<Button onClickFunction={navigateToCreate} classID="to-create-btn" />
			<About />
			<Button
				onClickFunction={navigateToAbout}
				classID="to-about-btn"
				label="Read More"
			/>
			<BlogHero />
			<Button
				onClickFunction={navigateToBlog}
				classID="to-blog-btn"
				label="Read More"
			/>
			<DesignHero />
			<Button
				onClickFunction={navigateToDesign}
				classID="to-design-btn"
				label="See More"
			/>
			<CreateHero />
			<ArtistsHero />
			<Button
				onClickFunction={navigateToArtists}
				classID="to-artists-btn"
				label="See More"
			/>
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default Home;
