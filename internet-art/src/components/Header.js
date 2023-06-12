import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
	return (
		<div className="header-top-bar">
			<div className="header-bars"></div>
			<h3>{title}</h3>
			<div className="header-bars"></div>
		</div>
	);
};

Header.defaultProps = {
	title: "About",
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Header;
