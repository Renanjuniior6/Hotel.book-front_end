import PropTypes from "prop-types"
import React from "react"

import { FavoriteProvider } from "./FavoriteContext"
import { UserProvider } from "./UserContext"

const AppProvider = ({ children }) => {
  return (
    <FavoriteProvider>
      <UserProvider>{children}</UserProvider>
    </FavoriteProvider>
  )
}

export default AppProvider

AppProvider.propTypes = {
  children: PropTypes.node,
}
