import PropTypes from "prop-types";

const BlogHeroCircle = ({ color, image }) => {
	const imageUrl = require(`../assets/ai images/${image}.png`);

	return (
		<div className={`about-page-circle-container ${color}`}>
			{/* <img
				src={imageUrl}
				alt="AI Generated artwork"
				className="blog-hero-image"
			/> */}
		</div>
	);
};

BlogHeroCircle.defaultProps = {
	color: "green",
	image: "ai-img-3",
};

BlogHeroCircle.propTypes = {
	color: PropTypes.string,
	image: PropTypes.string,
};

export default BlogHeroCircle;
