import Artist from "../components/Artist";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const Artists = () => {
	return (
		<div>
			<header>
				<NavBar></NavBar>
				<Header title="Artists"></Header>
			</header>
			<main className="container">
				<div className="artists-components-container">
					<Artist></Artist>
					<Artist reversed="reversed"></Artist>
					<Artist></Artist>
					<Artist reversed="reversed"></Artist>
					<Artist></Artist>
				</div>
				<div className="support-section">
					<Header title="Support"></Header>
					<h4>How Can You Support Queer African Artists</h4>
					<div className="header-bars"></div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>

				<ScrollToTop />
			</main>

			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Artists;
