import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background: #fff;

  b {
    color: #052659;
    font-size: 35px;
    font-weight: 800;
  }
`

export const Title = styled.p`
  font-size: 26px;
  margin-right: 70px;
  margin-top: 1%;
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
  font-size: 19px;
  border-bottom: ${(props) => (props.isActive ? "1px solid #052659" : "none")};
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
