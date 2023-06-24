import PropTypes from "prop-types";

const AboutHeroCircle = ({ color, image }) => {
	const imageUrl = require(`../assets/artists/${image}`);

	return (
		<div className={`about-hero-circle-container-${color}`}>
			<img src={imageUrl} alt="" className="blog-hero-image" />
		</div>
	);
};

AboutHeroCircle.defaultProps = {
	color: "blue",
	image: "zanele-muholi-1.jpg",
};

AboutHeroCircle.propTypes = {
	color: PropTypes.string,
	image: PropTypes.string,
};

export default AboutHeroCircle;
