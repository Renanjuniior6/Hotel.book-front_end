import PropTypes from "prop-types"
import React, { createContext, useContext, useState, useEffect } from "react"

const FavoriteContext = createContext({})

export const FavoriteProvider = ({ children }) => {
  const [favoriteHotels, setFavoritesHotels] = useState([])

  const uploadLocalStorage = async (hotel) => {
    await localStorage.setItem("hotelbook:favoriteInfo", JSON.stringify(hotel))
  }

  const putInFavorites = async (hotel) => {
    const hotelIndex = favoriteHotels.findIndex((ht) => ht.id === hotel.id)

    let newFavoriteHotels = []
    if (hotelIndex >= 0) {
      newFavoriteHotels = favoriteHotels

      removeFavorite(hotel)

      setFavoritesHotels(newFavoriteHotels)
    } else {
      newFavoriteHotels = [...favoriteHotels, hotel]
      setFavoritesHotels(newFavoriteHotels)
    }

    console.log(newFavoriteHotels)

    await uploadLocalStorage(newFavoriteHotels)
  }

  const removeFavorite = async (hotel) => {
    const removedHotel = favoriteHotels.filter((ht) => ht.id !== hotel.id)

    console.log(removedHotel)

    setFavoritesHotels(removedHotel)

    await uploadLocalStorage(removedHotel)
  }

  useEffect(() => {
    const loadUserData = async () => {
      const userData = await localStorage.getItem("hotelbook:favoriteInfo")

      if (userData) {
        setFavoritesHotels(JSON.parse(userData))
      }
    }

    loadUserData()
  }, [])

  return (
    <FavoriteContext.Provider
      value={{ putInFavorites, removeFavorite, favoriteHotels }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

export const useFavorite = () => {
  const context = useContext(FavoriteContext)

  if (!context) {
    throw new Error("useFavorite must be used with UseContext")
  }

  return context
}

FavoriteProvider.propTypes = {
  children: PropTypes.node,
}
