import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWNjOWIyYmY4NmY2NjgzM2UxZGNiOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTI3NDk5OSwiZXhwIjoxNjcxNTM0MTk5fQ.d3YvCiEsxBLZhcvlA6Comf1FCj-EDd1Q6Y2UbRIsVQM"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`
    }
})

