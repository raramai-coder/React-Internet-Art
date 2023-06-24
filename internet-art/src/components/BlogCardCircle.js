import PropTypes from "prop-types";

const BlogCardCircle = ({ color, image }) => {
	const imageUrl = require(`../assets/ai images/${image}.png`);

	return (
		<div className={`blog-card-circle-container ${color}`}>
			<img
				src={imageUrl}
				alt="AI Generated artwork"
				className="blog-hero-image"
			/>
		</div>
	);
};

BlogCardCircle.defaultProps = {
	color: "yellow",
	image: "ai-img-home-art-banner",
};

BlogCardCircle.propTypes = {
	color: PropTypes.string,
	image: PropTypes.string,
};

export default BlogCardCircle;
