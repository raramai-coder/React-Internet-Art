import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<Footer className="footer">
			<div className="header-bars"></div>
			<div className="footer-main-container">
				<h4>Copyright 2023 Raramainashe Wadaya</h4>

				<div className="footer-secondary-container">
					<FaRegHeart />
					<div>
						<Link to={"create"}>
							<h4>create</h4>
						</Link>
						<Link to={"about"}>
							<h4>about</h4>
						</Link>
						<Link to={"blog"}>
							<h4>blog</h4>
						</Link>
					</div>
				</div>
			</div>
		</Footer>
	);
};

export default Footer;
