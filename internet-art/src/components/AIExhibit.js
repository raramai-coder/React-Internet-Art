import PropTypes from "prop-types";

const AIExhibit = ({ country, description, artist }) => {
	return (
		<section className="ai-exhibit-container component-container">
			<div className="ai-art-container">
				<h1 className="ai-country-name">{country}</h1>
				<div className="ai-image-container">
					<img
						src={require("../assets/Ellipse 3.png")}
						className="ai-image"
						alt="AI Generated artwork"
					></img>
				</div>

				<h3 className="ai-artist-name">{artist}</h3>
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
};

AIExhibit.propTypes = {
	country: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	artist: PropTypes.string.isRequired,
};

export default AIExhibit;
