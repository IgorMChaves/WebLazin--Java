import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Header = styled.header`
    display: flex;
    background-color: ${colors.blue};
    align-itens: center;
    picture{
        img{
            height: 100px;
            border: 0px;
            margin: 100px;
        }
    }
`
