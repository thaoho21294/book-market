const BOOK_API =
  process.env.NODE_ENV === 'production'
    ? process.env.BLOG_API_PRODUCTION
    : process.env.BLOG_API_DEVELOPMENT

export { BOOK_API }
