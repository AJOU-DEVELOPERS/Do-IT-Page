import { TABLET_WIDTH } from "@Constant/.";
import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    width: 5em;
    text-align: center;
    @media only screen and (max-width: ${TABLET_WIDTH}px) {
      text-align: left;
    }
  }
  input {
    max-width: 30vw;
    height: 3vh;
    border-color: #ffffff;
    margin: 0px;
    padding: 0px;
    background: #ffffff;
  }
  option {
    font-size: 50%;
  }
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    margin: 3px;
    div {
      font-size: small;
    }
    input {
      font-size: small;
    }
    input::placeholder {
      font-size: small;
    }
  } 
`;

export const SelectBox = styled.div`
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: small;
  } 
`;
