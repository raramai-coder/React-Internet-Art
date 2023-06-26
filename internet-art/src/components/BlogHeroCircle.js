import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const BlogHeroCircle = ({ color, image, link, title }) => {
	const imageUrl = require(`../assets/ai images/${image}.png`);
	const [isHover, setIsHover] = useState(false);

	const handleMouseEnter = () => {
		setIsHover(true);
	};

	const handleMouseExit = () => {
		setIsHover(false);
	};

	return (
		<Link
			to={link}
			className={`blog-hero-circle-container ${color}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseExit}
		>
			{/* <img
				src={imageUrl}
				alt="AI Generated artwork"
				className="blog-hero-image"
			/> */}
			{isHover && <p>{title}</p>}
		</Link>
	);
};

BlogHeroCircle.defaultProps = {
	color: "green",
	image: "ai-img-home-art-banner",
	link: "/",
	title: "Blog Title Extra Long Name for Testing",
};

BlogHeroCircle.propTypes = {
	color: PropTypes.string,
	image: PropTypes.string,
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default BlogHeroCircle;
