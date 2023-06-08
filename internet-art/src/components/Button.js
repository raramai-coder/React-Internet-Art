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

export default Button;
