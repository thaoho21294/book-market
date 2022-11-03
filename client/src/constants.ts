const SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.BLOG_API_PRODUCTION
    : process.env.BLOG_API_DEVELOPMENT

export { SERVER_URL }
