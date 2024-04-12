import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { Header } from "./components/Header"
import { FavoriteProvider } from "./hooks/FavoriteContext.jsx"
import Routes from "./routes/routes.jsx"
import GlobalStyle from "./style/globalStyle"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FavoriteProvider>
        <Header />
        <Routes />
      </FavoriteProvider>
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
