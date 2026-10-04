export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
