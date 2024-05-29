import axios from "axios"

const apiHotelBook = axios.create({
  // baseURL: "https://hotelbook-backend-production.up.railway.app",
  baseURL: "http://localhost:3001",
})

apiHotelBook.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem("hotelbook:userData")
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiHotelBook
