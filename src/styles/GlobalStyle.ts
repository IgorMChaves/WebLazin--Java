import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  src: url('assests/font/Roboto.woff2') format('woff2');
}
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Roboto";
}
body{
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
}
`
export const colors = {
    blue: "#0E1725",
    bgBlue: "#1A2A44",
    CBlue: "#35507B",
    white: "#ffffff"
}
