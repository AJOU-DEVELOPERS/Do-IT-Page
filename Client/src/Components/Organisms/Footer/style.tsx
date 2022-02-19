import { AlignCenterAround, DefaultColor, GreyColor } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 10vh;
  background: ${GreyColor};
  ${AlignCenterAround};
`;

export const Text = styled.p`
  font-size: 1rem;
`;
