module.exports = {
  siteName: `dcoy.dev`,
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/:year/:month/:day/:slug',
      }
    }
  ],
  transformers: {
    remark: {
      plugins: [
        `@gridsome/remark-prismjs`
      ]
    }
  }
}
