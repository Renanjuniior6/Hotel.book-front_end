import React, { createContext, useContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvaider = ({children}) => {
  const [userData, setUserData] = useState({})

  const putUserData = async userInfo => {
    setUserData(userInfo)

    await localStorage.setItem('hotelBook:userData', JSON.stringify(userInfo))
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('hotelBook:userData')

      if (clientInfo) {
        setUserData(JSON.parse(clientInfo))
      }
    }

    loadUserData()
  }, [])

  return(
    <UserContext.Provider value={{putUserData ,userData}} >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if(!context){
    throw new Error("useUser must be used with UserContext ")
  }

  return context
}

UserProvaider.prototype = {
  children: PropTypes.node
}