import axios from "axios"

const apiHotelBook = axios.create({
  baseURL: "https://hotelbook-backend-production.up.railway.app",
})

apiHotelBook.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem("hotelbook:userData")
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiHotelBook
