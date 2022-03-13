import { TABLET_WIDTH } from "@Constant/.";
import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: end;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    width: 90%;
  }
`;

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  p {
    padding: 10px;
    border: 1px solid #707070;
    border-radius: 10px;
    margin-right: 10px;
  }
`;
