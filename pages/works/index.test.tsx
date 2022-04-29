import axios from 'axios'
import '@testing-library/jest-dom'

describe('WorksPage', () => {
  it('test API', async () => {
    const response = await axios.get('https://js-post-api.herokuapp.com/api/posts?_page=1')
    expect(response.status).toEqual(200)
  })
})
