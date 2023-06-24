import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import BlogHeroCircle from "../components/BlogHeroCircle";
import Footer from "../components/Footer";

const About = () => {
	return (
		<div className="container">
			<NavBar />
			<Header />
			<div className="component-container about-page-container">
				<BlogHeroCircle image={"ai-img-about-1"} />
				<p>
					This is an internet art website which aims to explore the role of AI
					generated art in society. The internet art has not yet been
					implemented and hence placeholders are in its place. But the styling
					and the implementation of the rest of the website is what stands to
					date.
				</p>
				<BlogHeroCircle image={"ai-img-about-2"} />
			</div>
			<Footer />
		</div>
	);
};

export default About;
