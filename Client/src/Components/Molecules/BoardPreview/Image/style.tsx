import { DefaultBoxShadow, MainItemHover } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  margin: 1vh 1vw;
  padding: 1vw;
  box-shadow: ${DefaultBoxShadow};
  border-radius: 12px;
  height: 100%;
  ${MainItemHover}
`;

export const ContentText = styled.div`
  height: 100%;
`;
