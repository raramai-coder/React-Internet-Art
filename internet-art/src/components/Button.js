const Button = () => {
	const onClick = () => {
		console.log("click");
	};

	return (
		<button className="standard-button" onClick={onClick}>
			Read More
		</button>
	);
};

export default Button;
