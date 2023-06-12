import PropTypes from "prop-types";

const AboutHeroCircle = ({ color }) => {
	return (
		<div className={`about-hero-circle-container-${color}`}>
			<img
				src={require("../assets/Ellipse 3.png")}
				alt=""
				className="blog-hero-image"
			/>
		</div>
	);
};

AboutHeroCircle.defaultProps = {
	color: "blue",
};

AboutHeroCircle.propTypes = {
	color: PropTypes.string,
};

export default AboutHeroCircle;
