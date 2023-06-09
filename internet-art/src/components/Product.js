import Button from "./Button";

const Product = () => {
	return (
		<div className="component-container">
			<div className="product-image-container">
				<picture>
					<img
						src={require("../assets/Rectangle 35.png")}
						alt="Shop product"
						className="product-image"
					/>
				</picture>
			</div>
			<div className="product-details-container">
				<h4>Product Name</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<div className="product-button">
					<Button label={"Buy"}></Button>
				</div>
			</div>
		</div>
	);
};

export default Product;
