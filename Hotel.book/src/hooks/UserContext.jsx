import React, { createContext, useContext, useState } from "react"

const UserContext = createContext({})

export const UserProvider = async ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async (userInfo) => {
    setUserData(userInfo)

    await localStorage.setItem("hotelbook:userData", JSON.stringify(userInfo))
  }

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error("useUser must be used with UseContext")
  }

  return context
}
