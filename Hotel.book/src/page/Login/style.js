import styled from "styled-components"

export const Title = styled.p`
  font-size: 26px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #19DDFA; 

  b {
    color:#E75159;
  }
`
export const LoginImg = styled.img`
    height: 71%;
`

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerItens = styled.div`
  background: #3F2378;
  box-shadow: 0px 4px 15px rgba(74, 164, 226, 0.24);
  height: 71%;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffff;
    margin-bottom: 10px;
    text-align: center;
    margin-top: 50px;
  }
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  margin-top: 28px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.52px;
  background: #ffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: none;
  padding-left: 10px;
`

export const Button = styled.button`
  width: 182.81px;
  height: 56.53px;
  background: #235396;
  border-radius: 28px;
  border: none;
  cursor: pointer;
  margin-top: 50px;
  margin-bottom: 25px;
  font-style: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const SingLink = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffff;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ErrorMessage = styled.p``
