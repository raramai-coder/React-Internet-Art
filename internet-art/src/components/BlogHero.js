import React from "react";
import BlogHeroCircle from "./BlogHeroCircle";

const BlogHero = () => {
	return (
		<div className="component-container blog-hero">
			<h1>Blog</h1>
			<div className="blog-circles-row row-1">
				<BlogHeroCircle
					color={"green"}
					image={"ai-img-blog-hero-1"}
					link="/essay"
					title="Internet Art Analysis Essay"
				/>
				<BlogHeroCircle
					color={"mustard"}
					image={"ai-img-blog-hero-2"}
					link="/devblogs"
					title="Dev Blogs"
				/>
				<BlogHeroCircle
					color={"green"}
					image={"ai-img-blog-hero-3"}
					link="/intention"
					title="Intention and Inspiration for Artwork"
				/>
			</div>
			<div className="blog-circles-row row-2">
				<BlogHeroCircle
					color={"mustard"}
					image={"ai-img-blog-hero-4"}
					link="/essay"
					title="Internet Art Analysis Essay"
				/>
				<BlogHeroCircle
					color={"green"}
					image={"ai-img-blog-hero-5"}
					link="/devblogs"
					title="Dev Blogs"
				/>
				<BlogHeroCircle
					color={"mustard"}
					image={"ai-img-blog-hero-6"}
					link="/intention"
					title="Intention and Inspiration for Artwork"
				/>
			</div>
		</div>
	);
};

export default BlogHero;
