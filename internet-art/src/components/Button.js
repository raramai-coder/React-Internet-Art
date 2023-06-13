import PropTypes from "prop-types";

const Button = ({ label, onClickFunction, classID }) => {
	return (
		<button className={`standard-button ${classID}`} onClick={onClickFunction}>
			{label}
		</button>
	);
};

const onClickDefault = () => {
	console.log("click");
};

Button.defaultProps = {
	label: "See More",
	onClick: onClickDefault,
	classID: "",
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	classID: PropTypes.string,
};

export default Button;
