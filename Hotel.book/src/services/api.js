import axios from "axios"

const apiHotelBook = axios.create({
  baseURL: "http://localhost:3001",
})

export default apiHotelBook
