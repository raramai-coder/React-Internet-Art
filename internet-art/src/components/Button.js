import PropTypes from "prop-types";

const Button = ({ label, onClickFunction, classID, disableButton }) => {
	return (
		<button
			className={`standard-button ${classID}`}
			onClick={onClickFunction}
			disabled={disableButton}
		>
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
	disableButton: false,
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	classID: PropTypes.string,
	disableButton: PropTypes.bool,
};

export default Button;
