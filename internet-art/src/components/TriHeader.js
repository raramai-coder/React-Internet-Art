import PropTypes from "prop-types";

const TriHeader = (props) => {
	return (
		<header>
			<div className="header-top-bar">
				<div className="header-bars"></div>
				<h3>{props.topTitle}</h3>
				<div className="header-bars"></div>
			</div>

			<h1 className="triheader-middle-title">{props.middleTitle}</h1>

			<div className="header-top-bar">
				<div className="header-bars"></div>
				<h3>{props.bottomTitle}</h3>
				<div className="header-bars"></div>
			</div>
		</header>
	);
};

TriHeader.defaultProps = {
	topTitle: "Celebrating",
	middleTitle: "Queer African",
	bottomTitle: "Art",
};

TriHeader.propTypes = {
	topTitle: PropTypes.string.isRequired,
	middleTitle: PropTypes.string.isRequired,
	bottomTitle: PropTypes.string.isRequired,
};

export default TriHeader;
