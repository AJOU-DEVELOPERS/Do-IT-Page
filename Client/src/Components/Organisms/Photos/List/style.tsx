import { TABLET_WIDTH, MOBILE_WIDTH } from "@Constant/.";
import { HoverPointer } from "@Style/.";
import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vw;
  height: 80%;
  align-content: flex-start;
`;

export const BoardContainer = styled.div`
  width: 21%;
  height: 25%;
  margin: 2vh auto;
  ${HoverPointer};

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    width: 40%;
  }
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 60%;
  }
`;
