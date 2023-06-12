import PropTypes from "prop-types";

const BlogCircle = ({ color }) => {
	return (
		<div className={`blog-circle-container-${color}`}>
			<img
				src={require("../assets/Ellipse 3.png")}
				alt=""
				className="blog-hero-image"
			/>
		</div>
	);
};

BlogCircle.defaultProps = {
	color: "dark-green",
};

BlogCircle.propTypes = {
	color: PropTypes.string,
};

export default BlogCircle;
