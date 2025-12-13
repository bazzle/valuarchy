import { HtmlBasePlugin } from "@11ty/eleventy";

const isProduction = process.env.ELEVENTY_ENV === "production";

export default function(eleventyConfig) {
	if(isProduction){
		eleventyConfig.addPlugin(HtmlBasePlugin, {
			baseHref: "https://bazzle.github.io/start-meetup/"
		});
	}
	eleventyConfig.addPassthroughCopy({
		"src/assets/scripts": "assets/scripts",
		"src/assets/img": "assets/img"
	});
	const pathPrefix = isProduction ? "/start-meetup/" : "/";
	return {
		pathPrefix: pathPrefix,
		dir: {
			input: "src",
			output: "_site"
		}
	};
}