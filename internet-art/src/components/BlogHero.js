import React from "react";
import BlogHeroCircle from "./BlogHeroCircle";

const BlogHero = () => {
	return (
		<div className="component-container blog-hero">
			<h1>Blog</h1>
			<div className="blog-circles-row row-1">
				<BlogHeroCircle color={"green"} />
				<BlogHeroCircle color={"mustard"} />
				<BlogHeroCircle color={"green"} />
			</div>
			<div className="blog-circles-row row-2">
				<BlogHeroCircle color={"mustard"} />
				<BlogHeroCircle color={"green"} />
				<BlogHeroCircle color={"mustard"} />
			</div>
		</div>
	);
};

export default BlogHero;
