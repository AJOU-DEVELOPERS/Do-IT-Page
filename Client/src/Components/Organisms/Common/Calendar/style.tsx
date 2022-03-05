import { TABLET_WIDTH } from "@Constant/.";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  pointer-events: none;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    margin-top: 0px;
  }
`;
