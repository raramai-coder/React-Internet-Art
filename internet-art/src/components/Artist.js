import BlogCardCircle from "./BlogCardCircle";
import PropTypes from "prop-types";

const Artist = ({ reversed, color }) => {
	return (
		<div className={`artist-component ${reversed}`}>
			<div className="artist-artworks-container">
				<div className="two-artworks-container">
					<BlogCardCircle color={color}></BlogCardCircle>
					<BlogCardCircle color={color}></BlogCardCircle>
				</div>

				<div className="two-artworks-container">
					<BlogCardCircle color={color}></BlogCardCircle>
					<BlogCardCircle color={color}></BlogCardCircle>
				</div>
			</div>

			<div className="artist-desc-container">
				<h4 className="artist-name">Artist Name</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<h4>Country</h4>
			</div>

			<div className="artist-image-container">
				<img
					src={require("../assets/Rectangle 34.png")}
					alt=""
					className="artist-image"
				/>
			</div>
		</div>
	);
};

Artist.defaultProps = {
	reversed: "",
	color: "green",
};

Artist.propTypes = {
	reversed: PropTypes.string,
	color: PropTypes.string,
};

export default Artist;
