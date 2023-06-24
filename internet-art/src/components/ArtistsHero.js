import React from "react";
import AboutHeroCircle from "./AboutHeroCircle";

const ArtistsHero = () => {
	return (
		<div className="component-container artist-hero">
			<div className="about-hero-circle-container">
				<AboutHeroCircle image={"toyin-ojih-odutola-1.jpg"} />
				<AboutHeroCircle color={"mustard"} image={"zanele-muholi-1.jpg"} />
			</div>
			<h1>Artists</h1>
			<div className="about-hero-circle-container">
				<AboutHeroCircle color={"mustard"} image={"daniel-obasi-4.jpg"} />
				<AboutHeroCircle image={"julie-mehretu-2.webp"} />
			</div>
		</div>
	);
};

export default ArtistsHero;
