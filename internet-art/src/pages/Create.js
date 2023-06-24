import { useState, useEffect } from "react";

import TriHeader from "../components/TriHeader";
import NavBar from "../components/NavBar";
import AIExhibit from "../components/AIExhibit";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

import data from "../data.json";

const Create = () => {
	const [artDetails, setArtDetails] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const postsFromserver = await fetchPosts();
			setArtDetails(postsFromserver);
		};
	}, []);

	const fetchPosts = async () => {
		const result = await fetch("http://localhost:5000/aiart");
		const data = await result.json();
		console.log(data);
		return data;
	};

	return (
		<div>
			<header>
				<NavBar />
				<TriHeader />
			</header>
			<main>
				{data.aiart.map((artwork, index) => (
					<AIExhibit
						key={index}
						country={artwork.country}
						description={artwork.description}
						artist={artwork.artist}
						reversed={artwork.reversed}
					/>
				))}

				{/* <AIExhibit />
				<AIExhibit color="lightGreen" reversed="reversed" />
				<AIExhibit />
				<AIExhibit color="lightGreen" reversed="reversed" /> */}
				<ScrollToTop />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Create;
