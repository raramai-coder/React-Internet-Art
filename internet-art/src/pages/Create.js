import { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

import TriHeader from "../components/TriHeader";
import NavBar from "../components/NavBar";
import AIExhibit from "../components/AIExhibit";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

import data from "../data.json";

const Create = () => {
	const [exhibitDetails, setExhibitDetails] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const configuration = new Configuration({
			apiKey: process.env.REACT_APP_OPEN_API_KEY,
		});

		const openai = new OpenAIApi(configuration);

		const generateImages = async () => {
			setLoading(true);
			const images = [];
			for (let index = 0; index < 4; index++) {
				const imageUrl = await generateSingleImage();
				images.push(imageUrl);
			}

			console.log("Images in generateImage :", images);

			if (images.length > 0) {
				//console.log("art images set correctly");
				setExhibitData(images);
			} else {
				console.log("art images not set correctly");
				setLoading(false);
				//await generateImages();
			}
		};

		const setExhibitData = (imagesGenerated) => {
			const details = [];
			var nextId = 0;
			imagesGenerated.forEach((image) => {
				details.push({
					id: nextId,
					imageURl: image,
					country: data.aiart[nextId].country,
					description: data.aiart[nextId].description,
					artist: data.aiart[nextId].artist,
					reversed: data.aiart[nextId].reversed,
				});

				nextId++;
			});
			console.log(details);
			setExhibitDetails(details);
			setLoading(false);
		};

		const generateSingleImage = async () => {
			try {
				const res = await openai.createImage({
					prompt: "Queer African Art",
					n: 1,
					size: "256x256",
				});
				if (res.data !== null) {
					// setResult(res.data.data[0].url);
					// return result;
					return res.data.data[0].url;
				} else {
					console.log("No data returned");
					return null;
				}
			} catch (error) {
				setLoading(false);
				console.error(
					`Error generating image: ${error.response.data.error.message}`
				);
			}
		};

		generateImages();
	}, []);

	return (
		<div>
			<header>
				<NavBar />
				<TriHeader />
			</header>
			<main>
				{!loading ? (
					exhibitDetails.map((artwork) => {
						return (
							<AIExhibit
								key={artwork.id}
								image={artwork.imageURl}
								country={artwork.country}
								description={artwork.description}
								artist={artwork.artist}
								reversed={artwork.reversed}
							/>
						);
					})
				) : (
					<div>Images are loading ...</div>
				)}

				<ScrollToTop />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Create;
