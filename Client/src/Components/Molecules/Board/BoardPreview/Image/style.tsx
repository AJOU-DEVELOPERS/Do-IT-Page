import { AlignCenterBetween, DefaultBoxShadow, MainItemHover } from "@Style/.";
import styled from "styled-components";

interface Props {
  type: string;
}
const PreviewStyle = `
  box-shadow: ${DefaultBoxShadow};
  border-radius: 12px; 
  height: 100%;
  ${MainItemHover}
`;

const DetailStyle = `
  height:100%;
  overflow-y:scroll;
`;

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  ${AlignCenterBetween}
  margin: 1vh 1vw;
  padding: 1vw;
  ${({ type }) => type === "preview" && PreviewStyle};
  ${({ type }) => type === "detail" && DetailStyle};
`;
