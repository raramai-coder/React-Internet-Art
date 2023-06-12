import NavBar from "../components/NavBar";
import Header from "../components/Header";

const Design = () => {
	return (
		<div>
			<NavBar />
			<Header title="Design" />

			<h4>Wireframes</h4>
			<div className="header-bars"></div>

			<div className="wireframes-container">
				<picture>
					<img
						alt=""
						src={require("../assets/wireframe1.png")}
						className="wireframe-pictures"
					/>
				</picture>

				<picture>
					<img
						alt=""
						src={require("../assets/wireframe2.png")}
						className="wireframe-pictures"
					/>
				</picture>
				<picture>
					<img
						alt=""
						src={require("../assets/wireframe3.png")}
						className="wireframe-pictures"
					/>
				</picture>
				<picture>
					<img
						alt=""
						src={require("../assets/wireframe4.png")}
						className="wireframe-pictures"
					/>
				</picture>
				<picture>
					<img
						alt=""
						src={require("../assets/wireframe5.png")}
						className="wireframe-pictures"
					/>
				</picture>
				<picture>
					<img
						alt=""
						src={require("../assets/wireframe6.png")}
						className="wireframe-pictures"
					/>
				</picture>
				<picture>
					<img
						alt=""
						src={require("../assets/wireframe7.png")}
						className="wireframe-pictures"
					/>
				</picture>
				<picture>
					<img
						alt=""
						src={require("../assets/wireframe8.png")}
						className="wireframe-pictures"
					/>
				</picture>
				<picture>
					<img
						alt=""
						src={require("../assets/wireframe9.png")}
						className="wireframe-pictures"
					/>
				</picture>
			</div>
		</div>
	);
};

export default Design;
