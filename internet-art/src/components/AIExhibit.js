import PropTypes from "prop-types";

const AIExhibit = ({ country, description, artist, color, reversed }) => {
	if (reversed === "reversed") {
		color = "lightGreen";
	} else {
		color = "orange";
	}

	return (
		<section className={`ai-exhibit-container component-container ${reversed}`}>
			<div className="ai-art-container">
				<h1 className={`ai-country-name-${reversed}`}>{country}</h1>
				<div className={`ai-image-container ${color}`}>
					<img
						src={require("../assets/ai images/ai-img-home-art-banner.png")}
						//className="ai-image"
						className="create-image"
						alt="AI Generated artwork"
					></img>
				</div>

				<h3 className={`ai-artist-name-${reversed}`}>{artist}</h3>
			</div>
			<div className="ai-art-description">
				<p>{description}</p>
			</div>
		</section>
	);
};

AIExhibit.defaultProps = {
	country: "Country Name",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum",
	artist: "Artist Name",
	color: "orange",
	reversed: "",
};

AIExhibit.propTypes = {
	country: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	artist: PropTypes.string.isRequired,
	color: PropTypes.string,
	reversed: PropTypes.string,
};

export default AIExhibit;
