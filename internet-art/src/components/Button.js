import PropTypes from "prop-types";

const Button = ({ label }) => {
	const onClick = () => {
		console.log("click");
	};

	return (
		<button className="standard-button" onClick={onClick}>
			{label}
		</button>
	);
};

Button.defaultProps = {
	label: "See More",
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
};

export default Button;
