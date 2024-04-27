import styled from "styled-components"

export const Container = styled.div`
  font-size: 1.625rem;
  margin-right: ${(props) => (props.styles ? "0" : "4.375rem;")};
  margin-left: ${(props) => (props.styles ? "32%" : "0")};
  cursor: pointer;
  color: ${(props) => (props.styles ? "#19ddfa" : "#000")};

  b {
    color: ${(props) => (props.styles ? "#e75159" : "#052659")};
    font-size: 2.1875rem;
    font-weight: 800;
  }
`
