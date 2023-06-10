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
					<BlogCard />
					<BlogCard />
					<BlogCard />
				</div>
				<BlogCircle />
			</div>
			<div className="tri-blog-card-holder">
				<BlogCircle />
				<div>
					<BlogCard original={"hidden"} reverse={"shown"} />
					<BlogCard original={"hidden"} reverse={"shown"} />
					<BlogCard original={"hidden"} reverse={"shown"} />
				</div>
			</div>
			<ScrollToTop />
			<Footer />
		</div>
	);
};

export default Blog;
