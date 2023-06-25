import React from "react";
import PropTypes from "prop-types";

const DesignButtons = ({ title, onClickFunction, toggled, image }) => {
	const imageUrl = require(`../assets/${image}.png`);

	return (
		<div
			className={`design-button-container ${toggled}`}
			onClick={onClickFunction}
		>
			<img src={imageUrl} alt="" className="design-button-image" />
			<h4 className="design-button-text">{title}</h4>
		</div>
	);
};

DesignButtons.propTypes = {
	title: PropTypes.string,
	onClickFunction: PropTypes.func,
	toggled: PropTypes.string,
	image: PropTypes.string,
};

DesignButtons.defaultProps = {
	title: "Wireframes",
	toggled: "",
	image: "wireframe-2",
};

export default DesignButtons;
