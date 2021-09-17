import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const DepatMain = styled.main`
  background-color: ${colors.bgBlue};
  align-items: center;
  display: flex;
  h3 {
    width: 100%;
    font-size: 25px;
    text-align: center;
    color: ${colors.white};
    align-items: center;
  }
  picture{
    img{
      align-items: center;
      size: 30px;
      margin-left: 30px;
      width: 70%;
    }
  }
`