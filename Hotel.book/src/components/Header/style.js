import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background: #fff;
  z-index: 100;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  b {
    color: #052659;
    font-size: 2.1875rem;
    font-weight: 800;
  }
`

export const Title = styled.a`
  font-size: 1.625rem;
  margin-right: 4.375rem;
  margin-top: 1%;
  cursor: pointer;
`

export const ContainerLeft = styled.div`
  margin-left: 4%;
  margin-top: 0.625rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 2.9375rem;
`

export const Links = styled.a`
  margin-top: 4%;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 500;
  border-bottom: ${(props) =>
    props.isActive ? "0.1875rem solid #052659" : "none"};
  &:hover {
    color: #052659;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  gap: 2.8125rem;
  align-items: center;
  margin-right: 4%;

  .icon {
    display: flex;
    align-items: center;
  }

  button {
    background: transparent;
    cursor: pointer;
    font-size: 1.0625rem;
    padding: 0.625rem 0.9375rem;

    &:hover {
      color: #fff;
      background-color: #052659;
    }
  }

  a {
    cursor: pointer;
    font-size: 1.0625rem;
    padding: 0.625rem 0.9375rem;

    &:hover {
      color: #052659;
    }
  }
`
