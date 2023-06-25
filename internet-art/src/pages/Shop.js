import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Product from "../components/Product";

import data from "../data.json";

const Shop = () => {
	return (
		<div>
			<NavBar />
			<Header title="Shop" />
			<div className="product-holder">
				{data.products.map((product, index) => (
					<Product
						image={product.image}
						title={product.title}
						description={product.description}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default Shop;
