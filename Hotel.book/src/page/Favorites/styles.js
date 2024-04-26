import styled from "styled-components"

export const Container = styled.div`
  padding-top: 6.25rem;
`

export const Title = styled.h1`
  font-size: 2.1875rem;
  margin-left: 3.125rem;
`

export const Hr = styled.hr`
  color: gray;
  margin-bottom: 1.5625rem;
  margin-left: 3.125rem;
  margin-right: 1.875rem;
`

export const BoxHotelFavorite = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.875rem;
  margin-bottom: 1.875rem;
  margin-left: 1.875rem;
  margin-right: 1.875rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 0.9375rem;

  img {
    width: 35%;
    height: 18.75rem;
    border-radius: 0.625rem;
  }

  &:hover {
    opacity: 0.9;
  }
`
export const Group = styled.div`
  display: flex;
  gap: 1.875rem;
  width: 90%;
  cursor: pointer;
`

export const Info = styled.div`
  h1 {
    font-size: 2.1875rem;
  }

  p {
    font-size: 1.5625rem;
  }

  span {
    font-size: 1.5625rem;
    position: relative;
    bottom: -5rem;
  }
`
export const Delete = styled.div`
  height: 3.125rem;
  cursor: pointer;

  &:hover {
    color: red;
  }
`
export const Empty = styled.div`
  margin-left: 38%;
  margin-top: 10%;

  p {
    font-size: 1.5625rem;
    width: 100%;
  }
`
