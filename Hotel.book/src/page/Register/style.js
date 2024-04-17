import styled from "styled-components"

export const Container = styled.div``

export const ContainerItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Label = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 14px;
  color: #eed519;
  margin-top: ${(props) => (props.error ? "12px" : "20px")};
  margin-bottom: 33px;
`

export const Input = styled.input`
  width: 27rem;
  height: 3rem;
  color: #ffff;
  background: #007cc2;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 16px;
  border: ${(props) => (props.error ? "2px solid #CC1717" : "none")};
  padding-left: 10px;
`

export const SignLink = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  margin-top: 30px;
  line-height: 16px;
  color: #eed519;

  a {
    cursor: pointer;
    text-decoration: underline;
  }
`

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  margin-top: 2px;
`
