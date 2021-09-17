import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Footer = styled.footer`
  background-color: ${colors.blue};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  div {
    margin: 30px;
    text-align: center;
    color: ${colors.white};
  }
`