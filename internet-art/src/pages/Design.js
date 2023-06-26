import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Button from "../components/Button";
import DesignButtons from "../components/DesignButtons";
import { useState } from "react";

const Design = () => {
	const [showWireframes, setShowWireframes] = useState(true);
	const [showStyleGuide, setShowStyleGuide] = useState(false);
	const [showInspiration, setShowInspiration] = useState(false);

	const [wireframesToggle, setWireframesToggle] = useState("toggled");
	const [styleGuideToggle, setStyleGuideToggle] = useState("");
	const [inspirationToggle, setInspirationToggle] = useState("");

	const toggleWireframes = () => {
		setShowWireframes(!showWireframes);
		setShowStyleGuide(false);
		setShowInspiration(false);

		setInspirationToggle("");
		setStyleGuideToggle("");
		setWireframesToggle("toggled");
	};

	const toggleStyleGuide = () => {
		setShowStyleGuide(!showStyleGuide);
		setShowWireframes(false);
		setShowInspiration(false);

		setInspirationToggle("");
		setStyleGuideToggle("toggled");
		setWireframesToggle("");
	};

	const toggleInspiration = () => {
		setShowInspiration(!showInspiration);
		setShowWireframes(false);
		setShowStyleGuide(false);

		setInspirationToggle("toggled");
		setStyleGuideToggle("");
		setWireframesToggle("");
	};

	return (
		<div>
			<NavBar />
			<Header title="Design" />

			<div className="design-buttons-holder">
				<DesignButtons
					onClickFunction={toggleWireframes}
					title={"Wireframes"}
					toggled={wireframesToggle}
				/>
				<DesignButtons
					onClickFunction={toggleStyleGuide}
					title={"Style Guide"}
					toggled={styleGuideToggle}
					image={"Loading Page-2"}
				/>
				<DesignButtons
					onClickFunction={toggleInspiration}
					title={"Inspiration"}
					toggled={inspirationToggle}
					image={"Picture2"}
				/>
			</div>

			{showWireframes && (
				<div>
					{/* <h4>Wireframes</h4>
					<div className="header-bars"></div> */}

					<div className="wireframes-container">
						<div className="image-description-container">
							<picture>
								<img
									alt=""
									src={require("../assets/wireframe1.png")}
									className="wireframe-pictures"
								/>
							</picture>
							<div className="description-container">
								<h4>Home Page Wireframe</h4>
								<div className="header-bars"></div>
								<p className="desc-points">
									1. Full expanded navigation bar at top to make navigation
									easier and more convenient for user.
								</p>
								<p className="desc-points">
									2. Site logo in the centre that directs user to home page.
								</p>
								<p className="desc-points">
									3. The header of the home page that tells the user what the
									site is about. A curation of queer African art.
								</p>
								<p className="desc-points">
									4. The first banner is an artwork from an artist and their
									country and bio, when the user clicks ‘See More’ button they
									are taken to AI art page where they can see more AI generated
									artworks and artist bios, which is presented as if it were a
									presentation of real African Queer art.
								</p>
								<p className="desc-points">
									5. Home page is scrollable and contains banners/heroes that
									link the user to various pages, I felt that this would be a
									great way to give the user access to all that the site has to
									offer on one page without the need for them to navigate back
									and forth across the site looking for things. This way they
									also have a preview for everything that they can experience on
									the site and ensures that they get to experience more things
									than if they were hidden away.
								</p>
								<p className="desc-points">
									6. Each circle border will contain an AI generated artwork,
									since the whole point of the website is art curatorship, I
									found it important to have a lot of artworks across the site,
									so on most pages there is an artwork in some form.
								</p>
								<p className="desc-points">
									7. About banner that tells the user what the site is about,
									this will be moved to the very end of the site for my exam
									because the user is only supposed to have the realisation that
									the art is all AI generated, after going through everything at
									the very end. But for this submission I put the About section
									so high up because it contains an explanation of the site will
									be and that at the moment the art is not yet there but there
									is a placeholder page for it.
								</p>
								<p className="desc-points">
									8. Blog Banner lets the user click onto six different blogs;
									the title will be in the centre of the images.
								</p>
								<p className="desc-points">
									9. Design Banner lets user go to either the wireframes, the
									style guide or the inspiration.
								</p>
								<p className="desc-points">
									10. Create Banner lets user generate AI art by calling the
									OpenAI art generator API and returning the generated art.
								</p>
								<p className="desc-points">
									11. Artists Banner takes the user to real human queer African
									artists and introduces them to their artworks.
								</p>
								<p className="desc-points">
									12. Shop Banner shows user some of the available items in the
									fake shop.
								</p>
							</div>
						</div>

						<div className="image-description-container">
							<picture>
								<img
									alt=""
									src={require("../assets/wireframe2.png")}
									className="wireframe-pictures"
								/>
							</picture>
							<div className="description-container">
								<h4>AI Art Page Wireframe</h4>
								<div className="header-bars"></div>

								<p className="desc-points">
									1. Header telling the user what kind of art will be exhibited
									on the page.
								</p>

								<p className="desc-points">
									2. Image will be an AI generated artwork from the OpenAI API
								</p>
								<p className="desc-points">
									3. Artist bio which will be generated by ChatGPT AI algorithm.
								</p>
								<p className="desc-points">
									4. The artist’s name which will also be generated by ChatGPT.
								</p>
								<p className="desc-points">
									5. The scale of the artwork is large because it is the most
									important part of the website and really demands attention
									from the viewer.
								</p>
								<p className="desc-points">
									6. Back to top button on pages that will need scrolling so
									that the user can easily navigate to the top if they want to
									use the Top navigation bar, I opted away from having the top
									navigation bar stay sticky on the page because it would
									obstruct from viewing the artwork and limit the screen space
									available for exhibiting the artworks.
								</p>
								<p className="desc-points">
									7. Footer with links to the four pages I anticipate my users
									will most want to interact with, home page, create page, about
									page and blog.
								</p>
							</div>
						</div>

						<div className="image-description-container">
							<picture>
								<img
									alt=""
									src={require("../assets/wireframe3.png")}
									className="wireframe-pictures"
								/>
							</picture>

							<div className="description-container">
								<h4>Artists Page Wireframe</h4>
								<div className="header-bars"></div>

								<p className="desc-points">1. Header for Artists page</p>
								<p className="desc-points">
									2. Four images that showcase the artist’s work. Unlike on the
									AI generated page, I want to show more work from these artists
									rather than having four generated artwork per fake artist and
									I would rather show more work from actual artists.
								</p>
								<p className="desc-points">
									3. The artists name, which will also be a link to the artists
									website or social media so that the user can engage further
									with the artists and get to know them.
								</p>
								<p className="desc-points">
									4. An artist’s bio that will come from the artists themselves,
									acquired from their websites or social media pages.
								</p>
								<p className="desc-points">5. An image of the artist</p>
								<p className="desc-points">
									6. The wireframe shows four artists, but I will put as many as
									I can find, this number is just for design purposes.
								</p>
								<p className="desc-points">
									7. Support section that informs the user of how they can
									support queer artists by engaging with their works and
									charitable organisations that work specifically with queer
									people.
								</p>
							</div>
						</div>

						<div className="image-description-container">
							<picture>
								<img
									alt=""
									src={require("../assets/wireframe4.png")}
									className="wireframe-pictures"
								/>
							</picture>

							<div className="description-container">
								<h4>Shop Page Wireframe</h4>
								<div className="header-bars"></div>

								<p className="desc-points">1. Header for the shop page.</p>
								<p className="desc-points">2. An image of the fake product.</p>
								<p className="desc-points">3. The product name.</p>
								<p className="desc-points">
									4. A brief description generated by ChatGPT of the fake
									product.
								</p>
								<p className="desc-points">
									5. A buy button that raises a pop up informing the user that
									this is not a real product that is for sale and tells them an
									interesting fact about one of the real queer African artists
									featured on the website. This is to aid in increasing intrigue
									and interest in the real-world artists.
								</p>
							</div>
						</div>

						<div className="image-description-container">
							<picture>
								<img
									alt=""
									src={require("../assets/wireframe5.png")}
									className="wireframe-pictures"
								/>
							</picture>

							<div className="description-container">
								<h4>Blog Post Wireframe</h4>
								<div className="header-bars"></div>

								<p className="desc-points">1. Header for blog post.</p>
								<p className="desc-points">2. Paragraph heading. </p>
								<p className="desc-points">
									3. Artwork generated by AI in circular frame border.
								</p>
								<p className="desc-points">4. References section</p>
							</div>
						</div>

						<div className="image-description-container">
							<picture>
								<img
									alt=""
									src={require("../assets/wireframe6.png")}
									className="wireframe-pictures"
								/>
							</picture>

							<div className="description-container">
								<h4>Blog Page Wireframe</h4>
								<div className="header-bars"></div>

								<p className="desc-points">1. Blog page header.</p>
								<p className="desc-points">
									2. Large artwork generated by AI in circular frame border{" "}
								</p>
								<p className="desc-points">
									3. Small artwork generated by AI in circular frame border.
								</p>
								<p className="desc-points">4. Title of specific blog post.</p>
								<p className="desc-points">
									5. Short description of what blog post is about.
								</p>
								<p className="desc-points">
									6. Sections of three posts alternate in terms of side position
									of big artwork placement.
								</p>
								<p className="desc-points">
									7. Entire Blog post card is clickable and links the user to
									the specific blog post.
								</p>
							</div>
						</div>

						<div className="image-description-container">
							<picture>
								<img
									alt=""
									src={require("../assets/wireframe7.png")}
									className="wireframe-pictures"
								/>
							</picture>

							<div className="description-container">
								<h4>About Page Wireframe</h4>
								<div className="header-bars"></div>

								<p className="desc-points">1. About page header.</p>
								<p className="desc-points">
									2. Paragraph informing the user what this website is about,
									and that the artwork is generated by AI, as well as artists
									intention is on the paragraph.
								</p>
								<p className="desc-points">
									3. Images of artwork generated by AI in circular frame border.
								</p>
							</div>
						</div>

						<div className="image-description-container">
							<picture>
								<img
									alt=""
									src={require("../assets/wireframe8.png")}
									className="wireframe-pictures"
								/>
							</picture>

							<div className="description-container">
								<h4>Create Page Wireframe</h4>
								<div className="header-bars"></div>

								<p className="desc-points">1. Create Header</p>
								<p className="desc-points">
									2. Description/prompt of what the user ought to do on this
									page to interact with art generating AI.
								</p>
								<p className="desc-points">
									3. Form that user fills in with a prompt to generate an
									artwork from for the AI.
								</p>
								<p className="desc-points">
									4. Button that sends the user request to the API for the image
									to be generated, this button will raise an alert if the user
									presses it without entering a prompt.
								</p>
								<p className="desc-points">
									5. Empty space where generated image will be placed once it is
									returned from the API.
								</p>
							</div>
						</div>

						<div className="image-description-container">
							<picture>
								<img
									alt=""
									src={require("../assets/wireframe9.png")}
									className="wireframe-pictures"
								/>
							</picture>

							<div className="description-container">
								<h4>Design Page Wireframe</h4>
								<div className="header-bars"></div>

								<p className="desc-points">1. Design page header</p>
								<p className="desc-points">
									2. Container that is clickable that shows specific section of
									the design page when clicked, it is enlarged when that design
									page is clicked.
								</p>
								<p className="desc-points">
									3. Selected section of design page being shown, which is the
									only one with a coloured circular border, the rest a re grey.
									And it is the largest one.
								</p>
								<p className="desc-points">
									4. Image of wireframe of style guide or inspiration
								</p>
								<p className="desc-points">
									5. Title of component or wireframe
								</p>
								<p>
									6. Explanation and context of component or wireframe in
									numbered list
								</p>
							</div>
						</div>
					</div>
				</div>
			)}

			{showStyleGuide && (
				<div>
					{/* <h4>Style Guide</h4>
					<div className="header-bars"></div> */}

					<div className="wireframes-container">
						<div className="image-description-container">
							<picture>
								<img
									alt=""
									src={require("../assets/styleguide1.png")}
									className="wireframe-pictures"
								/>
							</picture>

							<div className="description-container">
								<h4>Site Components</h4>
								<div className="header-bars"></div>

								<p className="desc-points">
									The navigation bar was designed in this way for ease of access
									and navigation, as well as to alert the user of all the
									different sections of the website they can experience.{" "}
								</p>
								<p className="desc-points">
									The website logo was chosen because of the three figures there
									to represent unity and inclusion and the love symbol to hint
									towards sexuality and inclusivity once more.
								</p>
								<p className="desc-points">
									The back to top arrow is also there to ease the user’s
									experience of the website since many of the pages scroll very
									far to the bottom and it would be cumbersome for the user to
									have to scroll back up every time they wanted to access the
									navigation.
								</p>
								<p className="desc-points">
									The footer is also there to signify the end of the page and
									the scrolling capabilities as well as to add sone structure to
									the site so it is also encapsulated by a straight line like
									the headers.
								</p>
							</div>
						</div>

						<div className="image-description-container">
							<picture>
								<img
									alt=""
									src={require("../assets/styleguide2.png")}
									className="wireframe-pictures"
								/>
							</picture>

							<div className="description-container">
								<h4>Artwork Frames</h4>
								<div className="header-bars"></div>

								<p className="desc-points">
									All the artwork is encapsulated in circular frames that are
									one of the seven primary colours chosen for the website.
								</p>
								<p className="desc-points">
									I decided to do this because I wanted to make the artwork
									standout by placing it in a border and calling attention to it
									by framing it in colour. But at the same time, the AI art
									generated is unpredictable and can at some times be uncanny so
									I thought the uneven borders would play well into this off
									sense of the art.
								</p>
								<p className="desc-points">
									I also wanted to bring a playfulness and to the website and I
									felt that these unbalanced borders would do exactly that
									whilst maintaining visual intrigue and structure.
								</p>
							</div>
						</div>

						<div className="image-description-container">
							<picture>
								<img
									alt=""
									src={require("../assets/sttyleguide3.png")}
									className="wireframe-pictures"
								/>
							</picture>

							<div className="description-container">
								<h4>Colour Palette</h4>
								<div className="header-bars"></div>

								<p className="desc-points">
									I chose this shade of pink (#FFF2F2) to be the background
									colour, because I wanted to play with colour and this shade
									was pale enough to not clash with the other colours that will
									be on the borders as well as the artworks.
								</p>
								<p className="desc-points">
									I decided to go with a colour filled website because a lot of
									African art is deeply saturated and colourful, so too are a
									lot of African traditional clothing styles.
								</p>
								<p className="desc-points">
									So I chose these colours for their brightness but I went on to
									select a desaturated version that was desaturated enough to
									not cause possible clashes with the artworks but also still
									bright enough to stay true to the African essence.
								</p>
								<p className="desc-points">
									Instead of going with a single colour I decided to go with
									multiple colours as there is an association of multiple
									colours with queer (for example the different pride flags).
									But I didn’t want to be corny and just go for the rainbow
									colours, but still decided to stay in my inspired design
									palette.
								</p>
							</div>
						</div>

						<div className="image-description-container">
							<picture>
								<img
									alt=""
									src={require("../assets/styleguide4.png")}
									className="wireframe-pictures"
								/>
							</picture>

							<div className="description-container">
								<h4>Headers</h4>
								<div className="header-bars"></div>

								<p className="desc-points">
									I decided to go with this style for headings and page titles
									because it is a nice contrast to the circular shapes on the
									page and this would draw attention to the headers and make
									them distinct for the user.
								</p>
								<p className="desc-points">
									They also add some structure to the page before the whimsy
									resumes below them..
								</p>
							</div>
						</div>
					</div>
				</div>
			)}

			{showInspiration && (
				<div>
					<h4>Inspiration</h4>
					<div className="header-bars"></div>
				</div>
			)}
		</div>
	);
};

export default Design;
