import React from "react"

import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Home from "../page/Home"
import { Route, Routes } from "react-router-dom"

import Home from "../Page/Home"
import Hotels from "../Page/Hotels"

function Router() {
  return (
    <Routes>
      <Route exact element={<Home />} path="/"></Route>
      <Route element={<Hotels />} path="/hotels"></Route>
    </Routes>
  )
}

export default Router
