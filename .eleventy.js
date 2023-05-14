module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('_includes')
    return {
      passthroughFileCopy: true
    }
  };

  module.exports = function(eleventyConfig) {
    return {
      dir: {
        includes: "/_includes",
        layouts: "/_includes/_layouts" 
      }
    }
  };