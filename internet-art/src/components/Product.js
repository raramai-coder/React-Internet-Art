import Button from "./Button";
import PropTypes from "prop-types";

const Product = ({ image, title, description }) => {
	const imageUrl = require(`../assets/${image}.png`);

	return (
		<div className="component-container">
			<div className="product-image-container">
				<picture>
					<img src={imageUrl} alt="Shop product" className="product-image" />
				</picture>
			</div>
			<div className="product-details-container">
				<h4>{title}</h4>
				<p>{description}</p>
				<div className="product-button">
					<Button label={"Buy"}></Button>
				</div>
			</div>
		</div>
	);
};

Product.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string,
};

Product.defaultProps = {
	title: "Coffee Mug",
	image: "product-cup",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export default Product;
