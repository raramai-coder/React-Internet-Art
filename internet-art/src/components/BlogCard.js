import BlogCardCircle from "./BlogCardCircle";
import PropTypes from "prop-types";

const BlogCard = ({ original, reverse }) => {
	return (
		<div className="component-container blog-card">
			<div className={original}>
				<BlogCardCircle />
			</div>

			<section className="blog-details">
				<h3>Blog Title</h3>
				<div className="blog-divider"></div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</section>

			<div className={reverse}>
				<BlogCardCircle />
			</div>
		</div>
	);
};

BlogCard.defaultProps = {
	reverse: "hidden",
	original: "shown",
};

BlogCard.propTypes = {
	reverse: PropTypes.string,
	original: PropTypes.string,
};

export default BlogCard;
