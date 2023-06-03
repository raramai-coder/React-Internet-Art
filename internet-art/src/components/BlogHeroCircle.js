import PropTypes from "prop-types";

const BlogHeroCircle = ({ color }) => {
	return (
		<div className={`blog-hero-circle-container-${color}`}>
			<img
				src={require("../assets/Ellipse 3.png")}
				alt=""
				className="blog-hero-image"
			/>
		</div>
	);
};

BlogHeroCircle.defaultProps = {
	color: "green",
};

BlogHeroCircle.propTypes = {
	color: PropTypes.string,
};

export default BlogHeroCircle;
