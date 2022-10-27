const BLOG_API =
  process.env.NODE_ENV === 'production'
    ? process.env.BLOG_API_PRODUCTION
    : process.env.BLOG_API_DEVELOPMENT
const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']
const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']
const PARAGRAPH_STYLES = ['h1', 'h2', 'h3', 'h4', 'paragraph', 'multiple']
const CODE_STYLES = ['block-code']

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

export {
  BLOG_API,
  TEXT_ALIGN_TYPES,
  HOTKEYS,
  LIST_TYPES,
  PARAGRAPH_STYLES,
  CODE_STYLES,
  FEATURES,
  APP_PATH,
  PERMISSION,
}
