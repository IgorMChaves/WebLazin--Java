import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const HistMain = styled.main`
  background-color: ${colors.bgBlue};
  display: block;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  h2{
    width: 100%;
    font-size: 25px;
    text-align: center;
    color: ${colors.white};
    align-items: center;

  }
  p {
    margin-left: 230px;
    margin-right: 230px;
    text-align: center;
    color: ${colors.white};
  }
`

export const A = styled.a`
  margin: 0 auto;
`;