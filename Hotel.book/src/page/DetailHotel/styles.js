import styled from "styled-components"

import cityBackground from "../../../images/city-map-background.jpg"

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  height: 70vh;
  padding-top: 6.25rem;
  margin-bottom: 3.125rem;
`
export const DetailsGroup = styled.div`
  width: 40%;
  background-color: #f5f5f7;
  margin-right: 2.5rem;
  padding: 1.875rem;
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
    border-radius: 3.125rem;
    background-color: #fff;
    position: absolute;
    top: 8.5rem;
    left: 44%;

    .Heart {
      height: 2rem;
      position: absolute;
      top: 0.5rem;
      left: 17%;
      cursor: pointer;
    }
  }
`

export const StarBox = styled.div`
  position: absolute;
  top: 19%;
  right: 1.25rem;

  .Star {
    color: yellow;
  }
`

export const Info = styled.div`
  h1 {
    font-size: 3.125rem;
  }

  p {
    font-size: 1.875rem;
  }
`
export const Total = styled.div`
  h3 {
    font-size: 1.5625rem;
  }

  h4 {
    color: gray;
    text-decoration: line-through;
  }
`
export const Content2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2.1875rem;
`
export const LeftBox = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;
  width: 48%;
`

export const RightBox = styled.div`
  height: 21.875rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #fff;

  .container {
    display: grid;
    grid-gap: 0.625rem;
    grid-template-areas:
      "rent rent-price"
      "serviceTax serviceTax-price"
      "additional additional-price";

    .rent {
      grid-area: rent;
    }

    .rent-price {
      grid-area: rent-price;
      margin-left: 0.625rem;
    }

    .serviceTax {
      grid-area: serviceTax;
    }

    .serviceTax-price {
      grid-area: serviceTax-price;
      margin-left: 1.75rem;
    }

    .additional {
      grid-area: additional;
    }

    .additional-price {
      grid-area: additional-price;
      margin-left: 1.75rem;
    }
  }
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
`

export const Map = styled.div`
  background-image: url(${cityBackground});
  width: 100%;
  height: 10rem;
  padding: 2.5rem;

  > div {
    width: 100%;
    height: 5.125rem;
    background-color: #fff;
    padding: 1.1875rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.875rem;
      font-weight: 500;
    }
  }
`
export const IconsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 11.25rem;
  padding: 1.5625rem;
  gap: 1.25rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
`

export const TotalValue = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.625rem 0 1.5625rem 0;
  }

  h3 {
    font-size: 1.25rem;
  }

  p {
    font-weight: 700;
    font-size: 1.25rem;
  }
`
