import BlogCardCircle from "./BlogCardCircle";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogCard = ({ original, reverse, link, title, description }) => {
	return (
		<Link className="component-container blog-card" to={link}>
			<div className={original}>
				<BlogCardCircle />
			</div>

			<section className="blog-details">
				<h3>{title}</h3>
				<div className="blog-divider"></div>
				<p>{description}</p>
			</section>

			<div className={reverse}>
				<BlogCardCircle />
			</div>
		</Link>
	);
};

BlogCard.defaultProps = {
	reverse: "hidden",
	original: "shown",
	link: "/",
	title: "Blog Title",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

BlogCard.propTypes = {
	reverse: PropTypes.string,
	original: PropTypes.string,
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};

export default BlogCard;
