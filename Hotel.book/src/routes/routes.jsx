import React from "react"
import { Route, Routes } from "react-router-dom"

import {
  DetailHotel,
  Favorites,
  FilteredHotels,
  Home,
  Hotels,
  Login,
  Register,
} from "../Page"
import PrivateRoutes from "./private-routes"

function Router() {
  return (
    <Routes>
      <Route element={<Register />} path="/cadastro"></Route>
      <Route element={<Login />} path="/login"></Route>
      <Route exact element={<Home />} path="/"></Route>
      <Route element={<Hotels />} path="/hotels"></Route>
      <Route element={<FilteredHotels />} path="/filtro-hotéis"></Route>
      <Route element={<DetailHotel />} path="/detailhotel/:id"></Route>
      <Route element={<PrivateRoutes />} path="/favoritos">
        <Route element={<Favorites />} path="/favoritos" />
      </Route>
    </Routes>
  )
}

export default Router
