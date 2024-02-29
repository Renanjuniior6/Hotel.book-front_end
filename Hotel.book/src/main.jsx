import React from "react"
import ReactDOM from "react-dom/client"

import Routes from "./routes/routes"
import GlobalStyle from "./style/globalStyle"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>,
)
