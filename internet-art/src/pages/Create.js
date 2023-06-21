import TriHeader from "../components/TriHeader";
import NavBar from "../components/NavBar";
import AIExhibit from "../components/AIExhibit";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Create = () => {
	return (
		<div>
			<header>
				<NavBar />
				<TriHeader />
			</header>
			<main>
				<AIExhibit />
				<AIExhibit color="lightGreen" reversed="reversed" />
				<AIExhibit />
				<AIExhibit color="lightGreen" reversed="reversed" />
				<ScrollToTop />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Create;
