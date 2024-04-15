import React from "react"
import { Route, Routes } from "react-router-dom"

import DetailHotel from "../page/DetailHotel"
import Favorites from "../page/Favorites"
import Home from "../page/Home"
import Hotels from "../page/Hotels"
import Login from "../page/Login"
import Cadastro from "../page/Register"

function Router() {
  return (
    <Routes>
      <Route exact element={<Home />} path="/"></Route>
      <Route element={<Cadastro />} path="/cadastro"></Route>
      <Route element={<Login />} path="/login"></Route>
      <Route element={<Hotels />} path="/hotels"></Route>
      <Route element={<DetailHotel />} path="/detailhotel/:id"></Route>
      <Route element={<Favorites />} path="/favoritos"></Route>
    </Routes>
  )
}

export default Router
