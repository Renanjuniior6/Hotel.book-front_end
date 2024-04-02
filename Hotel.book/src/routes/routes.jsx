import React from "react"
import { Route, Routes } from "react-router-dom"

import DetailHotel from "../Page/DetailHotel"
import Home from "../Page/Home"
import Hotels from "../Page/Hotels"

function Router() {
  return (
    <Routes>
      <Route exact element={<Home />} path="/"></Route>
      <Route element={<Hotels />} path="/hotels"></Route>
      <Route element={<DetailHotel />} path="/detailhotel/:id"></Route>
    </Routes>
  )
}

export default Router
