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
