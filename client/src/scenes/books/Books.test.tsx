import BookService from '../../services/books.service'
import axios, { AxiosResponse } from 'axios'
jest.mock('axios')
const mockedAxios = axios as jest.MockedFunction<typeof axios>
const mockBookListResponse = {
  data: [
    {
      _id: '635e5a4578a1ce8967056726',
      title: '.Net Framwork (For profesionals)',
      genre: 'Tâm Lý',
      price: 30000,
      images: [
        'https://books.goalkicker.com/DotNETFrameworkBook/DotNETFrameworkGrow.png',
        'https://paulvanderlaken.files.wordpress.com/2019/01/image-2.png',
        'https://bookriot.com/wp-content/uploads/2018/08/discounted-kindle-2-1280x720.jpg',
      ],
      username: 'john',
      createdAt: '2022-10-30T11:04:37.225Z',
      updatedAt: '2022-11-14T12:46:51.210Z',
      __v: 8,
      district: '7',
    },
  ],
} as AxiosResponse
describe('Books Component should render correctly', () => {
  test('Should display books that are fetched from the server', async () => {
    mockedAxios.mockResolvedValue(mockBookListResponse)
    const res = await BookService.getBooks()
    expect(axios).toHaveBeenCalledTimes(1)
    expect(res).toEqual(mockBookListResponse)
  })
})
