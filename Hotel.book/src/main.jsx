import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { FavoriteProvider } from "./hooks/FavoriteContext.jsx"
import { UserProvider } from "./hooks/UserContext.jsx"
import Routes from "./routes/routes.jsx"
import GlobalStyle from "./style/globalStyle"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <FavoriteProvider>
          <Routes />
        </FavoriteProvider>
      </UserProvider>
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
