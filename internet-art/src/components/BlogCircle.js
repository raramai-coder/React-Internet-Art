import PropTypes from "prop-types";

const BlogCircle = ({ color, image }) => {
	const imageUrl = require(`../assets/ai images/${image}.png`);

	return (
		<div className={`blog-circle-container ${color}`}>
			<img
				src={imageUrl}
				alt="AI Generated artwork"
				className="blog-hero-image"
			/>
		</div>
	);
};

BlogCircle.defaultProps = {
	color: "dark-green",
	image: "ai-img-home-art-banner",
};

BlogCircle.propTypes = {
	color: PropTypes.string,
	image: PropTypes.string,
};

export default BlogCircle;
