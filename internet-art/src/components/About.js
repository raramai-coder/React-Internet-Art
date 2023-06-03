import PropTypes from "prop-types";

const About = ({ label, description }) => {
	return (
		<section className="about-main-container">
			<div className="about-description">
				<p>{description}</p>
			</div>
			<div className="about-container">
				<h1 className="about-label">{label}</h1>
				<div className="about-image-container">
					<img
						src={require("../assets/Ellipse 3.png")}
						className="about-image"
						alt="AI generated artwork for about Page"
					></img>
				</div>
			</div>
		</section>
	);
};

About.defaultProps = {
	label: "About",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum",
};

About.propTypes = {
	label: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default About;
