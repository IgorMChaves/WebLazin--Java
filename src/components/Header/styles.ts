import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Header = styled.header`
  display: flex;
  background-color: ${colors.blue};
  align-items: center;
  h1 {
    width: 100%;
    text-align: center;
    color: ${colors.white};
    margin: 50px;  
  }
`
