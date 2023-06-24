import PropTypes from "prop-types";

const About = ({ label, description }) => {
	return (
		<div className="component-container">
			<section className="about-main-container">
				<div className="about-description">
					<p>{description}</p>
				</div>
				<div className="about-container">
					<h1 className="about-label">{label}</h1>
					<div className="about-image-container">
						<img
							src={require("../assets/ai images/ai-img-home-about-banner.png")}
							//className="about-image"
							className="create-image"
							alt="AI generated artwork for about Page"
						></img>
					</div>
				</div>
			</section>
		</div>
	);
};

About.defaultProps = {
	label: "About",
	description:
		"This is an internet art website which aims to explore the role of AI generated art in society. The internet art has not yet been implemented and hence placeholders are in its place. But the styling and the implementation of the rest of the website is what stands to date.",
};

About.propTypes = {
	label: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default About;
