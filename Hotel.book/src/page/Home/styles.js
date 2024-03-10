import styled from "styled-components"

import HomeImg from "../../../images/Image-Home2.webp"
import PetImg from "../../../images/img-pet-home.jpeg"

export const Container = styled.div`
  background-image: url(${HomeImg});
  background-size: cover;
  height: 95vh;
  margin-bottom: 4rem;
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
export const Container2 = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  display: flex;
`

export const BoxPets = styled.div`
  background-color: #d5bfd7;
  width: 65%;
  padding: 20px 50px;
  display: flex;
  gap: 20%;

  h1 {
    width: 400px;
    font-size: 45px;
    margin-bottom: 40px;
  }

  p {
    width: 400px;
    margin-bottom: 100px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    margin-top: 6%;
    width: 500px;
    height: 500px;
  }
`

export const ButtonSeeHotels = styled.button`
  height: 50px;
  width: 70%;
  margin-bottom: 30px;
  background-color: #000;
  color: #fff;
  border: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }
`

export const ButtonHowRentHotel = styled.button`
  height: 50px;
  width: 70%;
  background: transparent;
  color: #000;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

export const BoxPetsImg = styled.div`
  background-image: url(${PetImg});
  background-size: cover;
  background-position: center;
  width: 35%;
  padding: 30px;

  div {
    background-color: #fff;
    width: 400px;
    height: 250px;

    p {
      font-size: 35px;
      font-weight: 600;
      padding: 20px;
    }
  }
`
