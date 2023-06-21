import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="footer-component">
			<div className="header-bars"></div>
			<div className="footer-main-container">
				<p>Copyright &copy; 2023 Raramainashe Wadaya</p>

				<div className="footer-secondary-container">
					<FaRegHeart />
					<div>
						<Link to={"/create"}>
							<p>create</p>
						</Link>
						<Link to={"/about"}>
							<p>about</p>
						</Link>
						<Link to={"/blog"}>
							<p>blog</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
