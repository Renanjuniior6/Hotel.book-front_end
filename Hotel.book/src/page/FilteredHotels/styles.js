import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 7rem;
  justify-items: center;
`
export const Empty = styled.div`
  position: absolute;
  margin-left: -2%;
  margin-top: 10%;

  p {
    font-size: 1.5625rem;
    width: 100%;
  }
`
