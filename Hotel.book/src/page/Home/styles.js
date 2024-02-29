import styled from "styled-components"

import HomeImg from "../../../images/Imagem-Home-hotel.jpg"

export const Container = styled.div`
  background-image: url(${HomeImg});
  background-size: cover;
  height: 95vh;
`

export const SearchBox = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: absolute;
  top: 17%;
  left: 10%;
`

export const Title = styled.h1`
  text-align: center;
  width: 400px;
  margin-bottom: 10%;
`

export const Label = styled.label`
  border: solid 1px gray;
  width: 100%;
  height: 90px;
  margin-bottom: 20px;
  padding: 10px;
  font-weight: 700;

  select {
    margin-top: 5%;
    border: none;
    display: block;
    width: 100%;
  }
`
