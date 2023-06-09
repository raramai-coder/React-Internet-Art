import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Product from "../components/Product";

const Shop = () => {
	return (
		<div>
			<NavBar />
			<Header title="Shop" />
			<div className="product-holder">
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
};

export default Shop;
