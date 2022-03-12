import { AlignCenterAround, HoverPointer, MainItemHover } from "@Style/.";
import styled from "styled-components";

interface Props {
  type: string;
}

export const Container = styled.div<Props>`
  display: flex;
  ${HoverPointer}
  ${({ type }) => (type === "card" ? CardContainer : LineContainer)}
`;
const CardContainer = `
  background-color: white;
  width: 15%;
  height: 80%;
  flex-direction: column;
  justify-content: space-between;
`;
const LineContainer = `
  ${AlignCenterAround}
`;
export const Title = styled.p`
  font-size: 18px;
  line-height: 32px;
`;

export const Date = styled.p`
  font-size: 15px;
  color: #bac0c1;
`;

export const PreviewContainer = styled.div`
  padding: 20px 0;
  ${HoverPointer};
  display: flex;
  align-items: center;
  width: 100%;
  ${MainItemHover}
`;
