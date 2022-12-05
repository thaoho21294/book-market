import axios from 'axios'
import { ENDPOINTS } from 'constants/index'

const getBooks = () => {
  return axios({
    method: 'GET',
    url: `${process.env.BLOG_API_DEVELOPMENT}/${ENDPOINTS.getBookList}`,
  })
}

export default { getBooks }
