import React from "react"
import { Navigate, Outlet } from "react-router-dom"

function PrivateRoutes() {
  const user = localStorage.getItem("hotelbook:userData")

  if (!user) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default PrivateRoutes
