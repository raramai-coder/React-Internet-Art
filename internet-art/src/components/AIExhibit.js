import PropTypes from "prop-types";

const AIExhibit = ({
	country,
	description,
	artist,
	color,
	reversed,
	image,
}) => {
	if (reversed === "reversed") {
		color = "lightGreen";
	} else {
		color = "orange";
	}

	console.log(image);

	return (
		<section className={`ai-exhibit-container component-container ${reversed}`}>
			<div className="ai-art-container">
				<h1 className={`ai-country-name-${reversed}`}>{country}</h1>
				<div className={`ai-image-container ${color}`}>
					<img
						//src={require("../assets/ai images/ai-img-home-art-banner.png")}
						//className="ai-image"
						src={
							image != null
								? image
								: require("../assets/ai images/ai-img-home-art-banner.png")
						}
						className="create-image"
						alt="AI Generated artwork"
					></img>
				</div>

				<h3 className={`ai-artist-name-${reversed}`}>{artist}</h3>
			</div>
			<div className="ai-art-description">
				<p>{description}</p>
			</div>
		</section>
	);
};

AIExhibit.defaultProps = {
	country: "Ghana",
	description:
		"Nana Kwame is a Ghanaian visual artist and activist who explores the intersections of identity, culture, and sexuality in his work. He uses photography, collage, and mixed media to create vibrant and expressive portraits of queer African people and communities. His work challenges the stereotypes and stigma that often surround queer identities in Africa, and celebrates the diversity and resilience of his subjects. Nana Kwame has exhibited his work in various galleries and festivals across Africa and Europe, and has received several awards and grants for his artistic and social impact. He is also the founder of Queer Art Collective, a platform that supports and showcases emerging queer artists from Africa and the diaspora. Nana Kwame is based in Accra, Ghana, where he lives with his partner and two cats.",
	artist: "Nana Kwame",
	color: "orange",
	reversed: "",
};

AIExhibit.propTypes = {
	country: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	artist: PropTypes.string.isRequired,
	color: PropTypes.string,
	reversed: PropTypes.string,
};

export default AIExhibit;
