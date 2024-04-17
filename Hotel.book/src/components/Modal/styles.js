import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100vw;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  background-color: #fff;
  width: 430px;
  position: fixed;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  p {
    text-align: center;
  }
`
export const BoxButton = styled.div`
  display: flex;
  gap: 40px;
`
