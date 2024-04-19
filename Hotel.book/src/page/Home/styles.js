import styled from "styled-components"

import HomeImg from "../../../images/Image-Home2.webp"
import PetImg from "../../../images/img-pet-home.jpeg"
import SunImg from "../../../images/img-sun-home.jpeg"

export const Container = styled.div`
  background-image: url(${HomeImg});
  background-size: cover;
  height: 98vh;
  margin-bottom: 5rem;
`

export const SearchBox = styled.form`
  padding: 1.875rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: absolute;
  top: 17%;
  left: 10%;
  height: 36.0625rem;
`

export const Title = styled.h1`
  text-align: center;
  width: 25rem;
  margin-bottom: 10%;
`

export const Label = styled.label`
  border: solid 1px gray;
  width: 100%;
  height: 5.625rem;
  margin-bottom: 1.25rem;
  padding: 0.625rem;
  font-weight: 700;

  select {
    margin-top: 5%;
    border: none;
    display: block;
    width: 100%;
    font-size: 1rem;
  }
`
export const Icon = styled.div`
  display: flex;
  align-items: start;
  gap: 5px;
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
  padding: 1.25rem 3.125rem;
  display: flex;
  h1 {
    width: 25rem;
    font-size: 2.8125rem;
    margin-bottom: 2.5rem;
  }

  p {
    width: 25rem;
    margin-bottom: 6.25rem;
    font-size: 1.1rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    margin-top: 6%;
    width: 31.25rem;
    height: 31.25rem;
  }
`

export const ButtonSeeHotels = styled.a`
  height: 3.125rem;
  width: 17.6875rem;
  font-size: 1rem;
  margin-bottom: 1.875rem;
  background-color: #000;
  color: #fff;
  border: none;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  padding-top: 0.8rem;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }
`

export const ButtonHowRentHotel = styled.button`
  height: 3.125rem;
  width: 17.6875rem;
  background: transparent;
  color: #000;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #3957bd;
  }
`

export const BoxPetsImg = styled.div`
  background-image: url(${PetImg});
  background-size: cover;
  background-position: center;
  width: 35%;
  padding: 1.875rem;

  div {
    background-color: #fff;
    width: 25rem;
    height: 15.625rem;
    padding: 1.25rem;

    h1 {
      font-size: 2.1875rem;
      font-weight: 600;
      margin-bottom: 1.0625rem;
    }

    p {
      margin-bottom: 1.875rem;
      font-size: 1.1rem;
    }

    button {
      height: 3.125rem;
      width: 70%;
      background: transparent;
      color: #000;
      border: none;
      font-size: 1rem;
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
  padding: 1.875rem;

  div {
    background-color: #fff;
    width: 25rem;
    height: 15.625rem;
    padding: 1.25rem;

    h1 {
      font-size: 2.1875rem;
      font-weight: 600;
      margin-bottom: 1.0625rem;
    }

    p {
      margin-bottom: 1.875rem;
      font-size: 1.1rem;
    }

    button {
      height: 3.125rem;
      background: transparent;
      color: #000;
      border: none;
      font-size: 1rem;
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
  padding: 1.25rem 3.125rem;
  display: flex;
  gap: 5%;

  h1 {
    width: 32.9375rem;
    font-size: 2.8125rem;
    margin-bottom: 2.5rem;
  }

  p {
    width: 28.125rem;
    margin-bottom: 7.75rem;
    font-size: 1.1rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    margin-top: 6%;
    width: 28.125rem;
    height: 34.375rem;
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
      width: 43.0625rem;
      font-size: 3.5625rem;
      font-weight: 800;
      color: #fff;
      margin: 2.5625rem 4.375rem;
    }
  }

  .Box2 {
    width: 40%;

    background-color: #fbf5e7;
    padding: 1.5625rem;

    p {
      font-size: 2.875rem;
      font-weight: 700;
      margin-bottom: 5%;
    }

    button {
      height: 3.125rem;
      width: 9.375rem;
      background: transparent;
      color: #000;
      border: 1px solid #000;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      text-align: center;
      padding: 0.625rem;

      margin-left: 3%;

      &:hover {
        background-color: #000;
        color: #fff;
      }
    }

    img {
      width: 12.5rem;
      height: 16.25rem;
      border: 0.9375rem solid #b9d1ff;
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
