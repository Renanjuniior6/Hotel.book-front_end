import { createGlobalStyle } from "styled-components"
import "react-toastify/dist/ReactToastify.css"

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Poppins", sans-serif;
}

html {
    scroll-behavior: smooth;
  }

  body { 
    background-color: #fff;
  }
`
