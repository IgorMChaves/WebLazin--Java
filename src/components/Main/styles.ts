import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
  display: block;
  align-items: center;
  h1 {
    width: 100%;
    font-size: 75px;
    text-align: center;
    color: ${colors.white};
  }
  h4 {
    width: 100%;
    font-size: 26px;
    text-align: center;
    color: ${colors.white};
  }
  picture{
    img{
      align-items: center;
      size: 30px;
      margin: 0px;
      width: 33.3%;
    }
  }
`
