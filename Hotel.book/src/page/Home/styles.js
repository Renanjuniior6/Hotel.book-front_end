import styled from "styled-components"

import HomeImg from "../../../images/Image-Home2.webp"
import PetImg from "../../../images/img-pet-home.jpeg"
import SunImg from "../../../images/img-sun-home.jpeg"

export const Container = styled.div`
  background-image: url(${HomeImg});
  background-size: cover;
  height: 95vh;
  margin-bottom: 5rem;
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
    font-size: 1rem;
  }
`
export const Container2 = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  display: flex;
`

export const BoxPets = styled.div`
  background-color: #d5bfd7;
  width: 65%;
  padding: 20px 50px;
  display: flex;
  gap: 5%;

  h1 {
    width: 400px;
    font-size: 45px;
    margin-bottom: 40px;
  }

  p {
    width: 400px;
    margin-bottom: 100px;
    font-size: 1.1rem;
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
  width: 283px;
  font-size: 1rem;
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
  width: 288px;
  background: transparent;
  color: #000;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #3957bd;
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
    padding: 20px;

    h1 {
      font-size: 35px;
      font-weight: 600;
      margin-bottom: 17px;
    }

    p {
      margin-bottom: 30px;
      font-size: 1.1rem;
    }

    button {
      height: 50px;
      width: 70%;
      background: transparent;
      color: #000;
      border: none;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        color: #3957bd;
      }
    }
  }
`
export const Container3 = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  display: flex;
`
export const BoxImage = styled.div`
  background-image: url(${SunImg});
  background-size: cover;
  background-position: center;
  width: 35%;
  padding: 30px;

  div {
    background-color: #fff;
    width: 400px;
    height: 250px;
    padding: 20px;

    h1 {
      font-size: 35px;
      font-weight: 600;
      margin-bottom: 17px;
    }

    p {
      margin-bottom: 30px;
      font-size: 1.1rem;
    }

    button {
      height: 50px;
      background: transparent;
      color: #000;
      border: none;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        color: #3957bd;
      }
    }
  }
`

export const BoxBuyHotel = styled.div`
  background-color: #c5c9ba;
  width: 65%;
  padding: 20px 50px;
  display: flex;
  gap: 5%;

  h1 {
    width: 527px;
    font-size: 45px;
    margin-bottom: 40px;
  }

  p {
    width: 450px;
    margin-bottom: 124px;
    font-size: 1.1rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    margin-top: 6%;
    width: 450px;
    height: 550px;
  }
`

export const Container4 = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;
  display: flex;

  .Box1 {
    width: 60%;
    padding-top: 7%;
    background-color: #3957bd;

    hr {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }

    p {
      width: 689px;
      font-size: 57px;
      font-weight: 800;
      color: #fff;
      margin: 41px 70px;
    }
  }

  .Box2 {
    width: 40%;

    background-color: #fbf5e7;
    padding: 25px;

    p {
      font-size: 46px;
      font-weight: 700;
      margin-bottom: 5%;
    }

    button {
      height: 50px;
      width: 150px;
      background: transparent;
      color: #000;
      border: 1px solid #000;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      text-align: center;
      padding: 10px;

      margin-left: 3%;

      &:hover {
        background-color: #000;
        color: #fff;
      }
    }

    img {
      width: 200px;
      height: 260px;
      border: 15px solid #b9d1ff;
      margin-right: 6%;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .LearnMore {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: end;
    }
  }
`
