import {
  AlignCenterAround,
  HoverPointer,
  MainItemHover,
  textOverflowSafe,
} from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
  ${AlignCenterAround};
  ${MainItemHover}
  ${HoverPointer}
  margin-top: 2%;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  font-color: black;
  ${textOverflowSafe};
`;
