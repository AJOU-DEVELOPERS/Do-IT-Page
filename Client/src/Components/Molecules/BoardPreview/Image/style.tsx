import { AlignCenterAround, DefaultBoxShadow } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* width: 21%; */
  margin: 1vh 1vw;
  padding: 1vw;
  box-shadow: ${DefaultBoxShadow};
  border-radius: 12px;
  height: 100%;
  /* ${AlignCenterAround}; */
`;

export const ContentText = styled.div`
  /* height: 60%; */
  height: 100%;
`;
