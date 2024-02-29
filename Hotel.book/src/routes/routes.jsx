import React from "react"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import Home from "../Page/Home"

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/"></Route>
      </Switch>
    </Router>
  )
}

export default Routes
