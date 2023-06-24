import NavBar from "../components/NavBar";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard";
import BlogCircle from "../components/BlogCircle";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Blog = () => {
	return (
		<div>
			<NavBar />
			<Header title="Blog"></Header>
			<div className="tri-blog-card-holder">
				<div>
					<BlogCard
						link="/devblogs"
						title="Dev Blogs"
						description="All Dev Blogs written for this course for all the weeks in throughout the semester."
						image={"ai-img-blog-card-1"}
					/>
					<BlogCard
						link="/essay"
						title="Internet Art Analysis Essay"
						description="An internet art analysis of the internet artwork by
						activist Aaron Swartz and artist Taryn Simon titled Image Atlas."
						image={"ai-img-blog-card-2"}
					/>
					<BlogCard
						link="/intention"
						title="Intention and Inspiration for Artwork"
						description="A documentation of the intention of this website and its internet art as well as a collection of the sources of inspiration for its design."
						image={"ai-img-blog-card-3"}
					/>
				</div>
				<BlogCircle image={"ai-img-blog-circle"} />
			</div>
			{/* <div className="tri-blog-card-holder">
				<BlogCircle />
				<div>
					<BlogCard original={"hidden"} reverse={"shown"} />
					<BlogCard original={"hidden"} reverse={"shown"} />
					<BlogCard original={"hidden"} reverse={"shown"} />
				</div>
			</div> */}
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default Blog;
