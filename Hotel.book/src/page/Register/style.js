import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

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
  margin-bottom: 10px;
`

export const ContainerItens = styled.div`
  background: #ffffff;
  height: 92%;
  padding: 0 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.25;
    color: #007cc2;
    font-weight: 500;
    font-size: 29px;
    line-height: 28px;
    color: #007cc2;
    margin-top: 10px;
    margin-bottom: 24px;
  }
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

export const SingLink = styled.a`
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
