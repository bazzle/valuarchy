import { HtmlBasePlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
	eleventyConfig.addPlugin(HtmlBasePlugin, {
		baseHref: "https://bazzle.github.io/start-meetup/"
	});
	eleventyConfig.addPassthroughCopy({
		"src/assets/scripts": "assets/scripts",
		"src/assets/img": "assets/img"
	});
	return {
		pathPrefix: "/valuarchy-v1/",
		dir: {
			input: "src",
			output: "_site"
		}
	};
}