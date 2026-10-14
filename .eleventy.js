module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('content/photos');
  eleventyConfig.addCollection('posts', (api) =>
    api.getFilteredByGlob('content/posts/*.md')
      .filter((item) => item.data.draft !== true)
      .sort((a, b) => new Date(b.data.date || b.date) - new Date(a.data.date || a.date))
  );
  return { dir: { input: '.', includes: '_includes', layouts: 'layouts', data: 'data', output: '_site' }, templateFormats: ['md', 'njk', 'html'], htmlTemplateEngine: 'njk', markdownTemplateEngine: 'njk' };
};
