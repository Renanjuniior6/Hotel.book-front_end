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
    font-size: 35px;
    font-weight: 800;
  }
`

export const Title = styled.a`
  font-size: 26px;
  margin-right: 70px;
  margin-top: 1%;
  cursor: pointer;
`

export const ContainerLeft = styled.div`
  margin-left: 4%;
  margin-top: 10px;
  margin-bottom: 1rem;
  display: flex;
  gap: 47px;
`

export const Links = styled.a`
  margin-top: 4%;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  border-bottom: ${(props) => (props.isActive ? "3px solid #052659" : "none")};
  &:hover {
    color: #052659;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  gap: 45px;
  align-items: center;
  margin-right: 4%;

  button {
    background: transparent;
    cursor: pointer;
    font-size: 17px;
    padding: 10px 15px;

    &:hover {
      color: #fff;
      background-color: #052659;
    }
  }

  a {
    cursor: pointer;
    font-size: 17px;
    padding: 10px 15px;

    &:hover {
      color: #052659;
    }
  }
`
