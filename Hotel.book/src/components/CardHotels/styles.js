import styled from "styled-components"

export const Container = styled.div`
  width: 95%;
  margin-bottom: 1.875rem;
  background-color: #fff;

  &:hover {
    img {
      opacity: 0.8;
    }
  }

  img {
    width: 100%;
    height: 11.875rem;
    cursor: pointer;
  }
`
export const BoxUp = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0.625rem 0;

  svg {
    cursor: pointer;
  }
`
export const Paragraph = styled.div`
  p {
    margin-bottom: 0.312rem;
    font-size: 1.125rem;
  }

  b {
    color: ${(props) => (props.isOffer ? "red" : "#000")};
  }
`

export const BoxDown = styled.div`
  display: flex;
  flex-direction: column;
`
export const Info = styled.div`
  display: flex;
  gap: 0.4rem;

  .icon {
    display: flex;
    align-items: center;
    gap: 0.3125rem;
  }
`
