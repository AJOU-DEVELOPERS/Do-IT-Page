import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { DefaultColor } from "@Style/.";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
    text-decoration: none;
    color: #000000;
  }
  *::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  button{
    background:none;
    color : ${DefaultColor}
    &:hover{
      cursor:pointer;
    }
  }
  p{
    font-familiy: Noto Sans CJK KR;
    color : ${DefaultColor}
  }
  a{
    font-familiy: Noto Sans CJK KR;
    color : ${DefaultColor}
  }
`;
export default GlobalStyle;
