import PropTypes from "prop-types";

const BlogHeroCircle = ({ color, image }) => {
	const imageUrl = require(`../assets/ai images/${image}.png`);

	return (
		<div className={`blog-hero-circle-container ${color}`}>
			<img
				src={imageUrl}
				alt="AI Generated artwork"
				className="blog-hero-image"
			/>
		</div>
	);
};

BlogHeroCircle.defaultProps = {
	color: "green",
	image: "ai-img-home-art-banner",
};

BlogHeroCircle.propTypes = {
	color: PropTypes.string,
	image: PropTypes.string,
};

export default BlogHeroCircle;
