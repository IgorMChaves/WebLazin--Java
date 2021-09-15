import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Nav = styled.nav`
  border: 0.5rem solid ${colors.blue};
  border-top-width: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      list-style-type: none;
      padding: 2rem;
      text-align: center;
      &:hover {
        background-color: ${colors.bgBlue};
        cursor: pointer;
      }
      a {
        text-decoration: none;
        color: ${colors.white};
      }
    }
`