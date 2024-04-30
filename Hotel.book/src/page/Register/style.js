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

  h1 {
    font-size: 1.625rem;
    color: #fff;
    margin-left: 29%;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  height: 37.5rem;
  width: 59.375rem;
  position: relative;
  border-radius: 0.3125rem;
`

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #052659;
  padding: 1.25rem;
  width: 47%;

  button {
    background-color: rgba(25, 221, 250, 0.5);
    color: #fff;
    font-weight: 600;
    margin-top: 1.25rem;
    border-radius: 0.3125rem;
    width: 40%;
  }
`

export const Label = styled.p`
  font-weight: 500;
  font-size: 0.9375rem;
  color: #fff;
  line-height: 0.875rem;
  margin-top: ${(props) => (props.error ? "0.75rem" : "1.25rem")};
  margin-bottom: 0.625rem;
`

export const Input = styled.input`
  width: 100%;
  height: 1.875rem;
  background: #fff;
  border-radius: 0.1875rem;
  border: ${(props) => (props.error ? "3px solid #CC1717" : "none")};
  padding-left: 0.3125rem;
`

export const SignLink = styled.a`
  position: absolute;
  bottom: 1.25rem;
  font-weight: 500;
  font-size: 0.875rem;
  margin-top: 1.875rem;
  line-height: 1rem;
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
  font-size: 0.875rem;
  line-height: 1rem;
  color: #cc1717;
  margin-top: 0.5625rem;
`
