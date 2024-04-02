import React from "react"
import Home from "../page/Home"
import { Route, Routes } from "react-router-dom"
import Hotels from "../page/Hotels"

function Router() {
  return (
    <Routes>
      <Route exact element={<Home />} path="/"></Route>
      <Route element={<Hotels />} path="/hotels"></Route>
    </Routes>
  )
}

export default Router
