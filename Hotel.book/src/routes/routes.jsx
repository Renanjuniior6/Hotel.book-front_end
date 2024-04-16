import React from "react"
import { Route, Routes } from "react-router-dom"

<<<<<<< HEAD
//import PrivateRoutes from "./private-routes"
import DetailHotel from "../page/DetailHotel"
import Favorites from "../page/Favorites"
import Home from "../page/Home"
import Hotels from "../page/Hotels"
import Login from "../page/Login"
import Cadastro from "../page/Register"
=======
import DetailHotel from "../Page/DetailHotel"
import Favorites from "../Page/Favorites"
import Home from "../Page/Home"
import Hotels from "../Page/Hotels"
import Login from "../Page/Login"
import Cadastro from "../Page/Register"
>>>>>>> 5097a1cad14a4fcfe319f487e78f3274e2ab737c

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
