import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

<<<<<<< HEAD
//import { Header } from "./components/Header"
import Router from "./routes/routes.jsx"
=======
import { Header } from "./components/Header"
import { FavoriteProvider } from "./hooks/FavoriteContext.jsx"
import Routes from "./routes/routes.jsx"
>>>>>>> 142bd2525d3c9977550cdd0d73ef0e68ba8f68d8
import GlobalStyle from "./style/globalStyle"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <Router />
=======
      <FavoriteProvider>
        <Header />
        <Routes />
      </FavoriteProvider>
>>>>>>> 142bd2525d3c9977550cdd0d73ef0e68ba8f68d8
      <ToastContainer />
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>,
)
