const isProduction = process.env.ELEVENTY_ENV === "production";

export default function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({
		"src/assets/scripts": "assets/scripts",
		"src/assets/img": "assets/img"
	});
	const pathPrefix = "/";
	return {
		pathPrefix: pathPrefix,
		dir: {
			input: "src",
			output: "_site"
		}
	};
}