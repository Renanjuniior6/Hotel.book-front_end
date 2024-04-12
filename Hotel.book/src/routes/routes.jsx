import React from "react"
import { Route, Routes } from "react-router-dom"

import DetailHotel from "../Page/DetailHotel"
import Favorites from "../Page/Favorites"
import Home from "../Page/Home"
import Hotels from "../Page/Hotels"
import Login from "../Page/Login"
import Cadastro from "../Page/Register"

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
