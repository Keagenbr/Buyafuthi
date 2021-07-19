module.exports = (eleventyConfig) => {

  eleventyConfig.addPassthroughCopy('./src/styles/style.css');
  eleventyConfig.addPassthroughCopy('./src/Source/');

    return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}