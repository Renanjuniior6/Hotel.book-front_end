import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background: #fff;
  z-index: 100;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 5px 40px 8px 40px;
`

export const ContainerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 2.9375rem;
`

export const Links = styled.a`
  margin-top: 3%;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 500;
  position: relative;

  &:hover {
    color: #052659;
  }

  &::after {
    content: "";
    height: 2px;
    width: ${(props) => (props.isactive ? "100%" : 0)};
    background-color: #052659;
    position: absolute;
    bottom: -3px;
    left: 0;
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  .icon {
    display: flex;
    align-items: center;
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

export const About = styled.div`
  border-left: 3px solid #052659;
  padding-left: 5px;

  a {
    text-decoration: none;
    color: #000;
  }
`

export const Border = styled.div`
  border-right: 3px solid #052659;
  border-left: 3px solid #052659;
`

export const Group = styled.div`
  display: flex;
  margin-right: 10px;
  margin-left: 10px;
`

export const UserName = styled.p``

export const Logout = styled.p`
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`

export const ProfileButton = styled.button`
  background: transparent;
  cursor: pointer;
  font-size: 1.0625rem;
  padding: 0.625rem 0.9375rem;

  &:hover {
    color: #fff;
    background-color: #052659;
  }
`
