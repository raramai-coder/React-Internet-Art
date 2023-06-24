import ShopHeroCircle from "./ShopHeroCircle";

const ShopHero = () => {
	return (
		<div className="shop-hero-container">
			<h1>Shop</h1>
			<div className="shop-hero-image-container">
				<ShopHeroCircle />
				<ShopHeroCircle />
				<ShopHeroCircle />
				<ShopHeroCircle />
			</div>
		</div>
	);
};

export default ShopHero;
