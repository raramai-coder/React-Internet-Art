import React from "react";
import AboutHeroCircle from "./AboutHeroCircle";

const ArtistsHero = () => {
	return (
		<div className="component-container artist-hero">
			<div className="about-hero-circle-container">
				<AboutHeroCircle />
				<AboutHeroCircle color={"mustard"} />
			</div>
			<h1>Artists</h1>
			<div className="about-hero-circle-container">
				<AboutHeroCircle color={"mustard"} />
				<AboutHeroCircle />
			</div>
		</div>
	);
};

export default ArtistsHero;
