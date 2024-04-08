import React from "react"
import { Route, Routes } from "react-router-dom"

import Cadastro from "../page/Cadastro"
import Login from "../page/Login"
import DetailHotel from "../page/DetailHotel"
import Home from "../page/Home"
import Hotels from "../page/Hotels"

function Router() {
  return (
    <Routes>
      <Route exact element={<Home />} path="/"></Route>
      <Route element={<Cadastro />} path="/cadastro" ></Route>
      <Route element={<Login />} path="/login" ></Route>
      <Route element={<Hotels />} path="/hotels"></Route>
      <Route element={<DetailHotel />} path="/detailhotel/:id"></Route>
    </Routes>
  )
}

export default Router
