import React from "react";
import BlogHeroCircle from "./BlogHeroCircle";

const BlogHero = () => {
	return (
		<div className="component-container blog-hero">
			<h1>Blog</h1>
			<div className="blog-circles-row row-1">
				<BlogHeroCircle color={"green"} image={"ai-img-blog-hero-1"} />
				<BlogHeroCircle color={"mustard"} image={"ai-img-blog-hero-2"} />
				<BlogHeroCircle color={"green"} image={"ai-img-blog-hero-3"} />
			</div>
			<div className="blog-circles-row row-2">
				<BlogHeroCircle color={"mustard"} image={"ai-img-blog-hero-4"} />
				<BlogHeroCircle color={"green"} image={"ai-img-blog-hero-5"} />
				<BlogHeroCircle color={"mustard"} image={"ai-img-blog-hero-6"} />
			</div>
		</div>
	);
};

export default BlogHero;
