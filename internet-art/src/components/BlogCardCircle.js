import PropTypes from "prop-types";

const BlogCardCircle = ({ color }) => {
	return (
		<div className={`blog-card-circle-container ${color}`}>
			<img
				src={require("../assets/Ellipse 3.png")}
				alt=""
				className="blog-hero-image"
			/>
		</div>
	);
};

BlogCardCircle.defaultProps = {
	color: "yellow",
};

BlogCardCircle.propTypes = {
	color: PropTypes.string,
};

export default BlogCardCircle;
