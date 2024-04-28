import styled from "styled-components"

import foto from "../../../images/cadastro.jpg"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${foto});
  background-size: cover;
  background-position: center;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 600px;
  width: 950px;
  position: relative;
  border-radius: 5px;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #052659;
  padding: 20px;
  width: 47%;

  button {
    background-color: rgba(25, 221, 250, 0.5);
    color: #fff;
    font-weight: 600;
    margin-top: 1.25rem;
    border-radius: 5px;
    width: 40%;
  }
`

export const Label = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: #fff;
  line-height: 14px;
  margin-top: ${(props) => (props.error ? "12px" : "20px")};
  margin-bottom: 10px;
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
  background: #fff;
  border-radius: 3px;
  border: ${(props) => (props.error ? "3px solid #CC1717" : "none")};
  padding-left: 5px;
`

export const SignLink = styled.a`
  position: absolute;
  bottom: 20px;
  font-weight: 500;
  font-size: 14px;
  margin-top: 30px;
  line-height: 16px;
  color: #fff;

  a {
    cursor: pointer;
    text-decoration: underline;
    color: #fff;

    &:hover {
      color: rgba(25, 221, 250, 0.5);
    }
  }
`

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 9px;
`
