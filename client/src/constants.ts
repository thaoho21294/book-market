const BLOG_API =
  process.env.NODE_ENV === 'production'
    ? process.env.BLOG_API_PRODUCTION
    : process.env.BLOG_API_DEVELOPMENT

const PERMISSION = {
  READ: 'read',
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
}
const APP_PATH = {
  HOME: '/',
  POSTS: '/posts',
  CREATE_POSTS: '/posts/create',
  ABOUT: '/about',
}

const FEATURES = [
  {
    label: 'all posts',
    path: APP_PATH.HOME,
    needAuthentication: false,
  },
  {
    label: 'create post',
    path: APP_PATH.CREATE_POSTS,
    needAuthentication: true,
  },
  {
    label: 'about',
    path: APP_PATH.ABOUT,
    needAuthentication: false,
  },
]

export { BLOG_API, FEATURES, APP_PATH, PERMISSION }
