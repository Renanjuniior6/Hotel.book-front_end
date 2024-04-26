import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import AppProvider from "./hooks"
import Routes from "./routes/routes.jsx"
import GlobalStyle from "./style/globalStyle"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
    <GlobalStyle />
    <ToastContainer
      autoClose={1000}
      theme="colored"
      limit={1}
      position="top-center"
    />
  </React.StrictMode>,
)
