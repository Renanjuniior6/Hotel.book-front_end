import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  background-color: #fff;
  width: 26.875rem;
  position: fixed;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  border-radius: 0.1875rem;

  p {
    text-align: center;
    font-size: 1.25rem;
  }
`
export const BoxButton = styled.div`
  display: flex;
  gap: 2.5rem;

  .btn {
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  button {
    border-radius: 0.1875rem;
  }
`
