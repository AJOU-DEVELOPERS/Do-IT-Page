import { TABLET_WIDTH } from "@Constant/index";
import { AlignCenterAround, DefaultColor, GreyColor } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 10vh;
  background: ${GreyColor};
  ${AlignCenterAround};
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    height: 6vh;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 0.6rem;
  }
`;
