import axios from 'axios'
const baseURL = 'https://60cc4bb571b73400171f76b6.mockapi.io/api/v1'
export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})
