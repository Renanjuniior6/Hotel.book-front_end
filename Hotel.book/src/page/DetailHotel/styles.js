import styled from "styled-components"

import cityBackground from "../../../images/city-map-background.jpg"

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  height: 70vh;
  padding-top: 7rem;
  margin-bottom: 50px;
`
export const DetailsGroup = styled.div`
  width: 40%;
  background-color: #f5f5f7;
  margin-right: 40px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ImageBox = styled.div`
  width: 60%;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    height: 3rem;
    width: 3rem;
    border-radius: 50px;
    background-color: #fff;
    position: absolute;
    top: 8.5rem;
    left: 44%;

    .Heart {
      height: 2rem;
      position: absolute;
      top: 8px;
      left: 17%;
      cursor: pointer;
    }
  }
`
export const Info = styled.div`
  h1 {
    font-size: 50px;
  }

  p {
    font-size: 30px;
  }
`
export const Total = styled.div`
  h3 {
    font-size: 25px;
  }
`
export const Content2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 35px;
`
export const LeftBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const RightBox = styled.div`
  width: 300px;
  height: 350px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .container {
    display: grid;
    grid-gap: 10px;
    grid-template-areas:
      "rent rent-price"
      "serviceTax serviceTax-price"
      "fireEnsurance fireEnsurance-price";

    .rent {
      grid-area: rent;
    }

    .rent-price {
      grid-area: rent-price;
      margin-left: 10px;
    }

    .serviceTax {
      grid-area: serviceTax;
    }

    .serviceTax-price {
      grid-area: serviceTax-price;
      margin-left: 28px;
    }

    .fireEnsurance {
      grid-area: fireEnsurance;
    }

    .fireEnsurance-price {
      grid-area: fireEnsurance-price;
      margin-left: 28px;
    }
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`

export const Map = styled.div`
  background-image: url(${cityBackground});
  width: 600px;
  height: 160px;
  padding: 40px;

  > div {
    width: 100%;
    height: 82px;
    background-color: #fff;
    padding: 19px;

    span {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 30px;
      font-weight: 500;
    }
  }
`
export const IconsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 600px;
  height: 180px;
  padding: 25px;
  gap: 20px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`

export const TotalValue = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 25px 0;
  }

  h3 {
    font-size: 20px;
  }

  p {
    font-weight: 700;
    font-size: 20px;
  }
`
