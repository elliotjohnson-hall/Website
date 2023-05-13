module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('_includes')
    return {
      passthroughFileCopy: true
    }
  };
