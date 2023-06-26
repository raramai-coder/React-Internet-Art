import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Product from "../components/Product";
import Footer from "../components/Footer";

import data from "../data.json";

const Shop = () => {
	return (
		<div>
			<NavBar />
			<Header title="Shop" />
			<main>
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
			</main>
			<footer>
				<Footer></Footer>
			</footer>
		</div>
	);
};

export default Shop;
