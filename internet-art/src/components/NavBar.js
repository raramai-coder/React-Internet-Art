import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const NavBar = ({ pages }) => {
	return (
		<nav className="nav-bar">
			<div className="nav-links">
				{pages.map((page) => (
					<Link to={page.link} key={page.id}>
						{page.icon != null ? (
							<FaRegHeart />
						) : (
							<p key={page.id}>{page.label}</p>
						)}
					</Link>
				))}
			</div>

			<div className="nav-divider"></div>
		</nav>
	);
};

NavBar.defaultProps = {
	pages: [
		{ id: 1, label: "artists", link: "/artists" },
		{ id: 2, label: "blog", link: "/blog" },
		{ id: 3, label: "about", link: "/about" },
		{ id: 4, label: "home", link: "/", icon: "src/assets/site-icon.png" },
		{ id: 5, label: "shop", link: "/shop" },
		{ id: 6, label: "design", link: "/design" },
		{ id: 7, label: "create", link: "/create" },
	],
};

NavBar.propTypes = {
	pages: PropTypes.array,
};

export default NavBar;
