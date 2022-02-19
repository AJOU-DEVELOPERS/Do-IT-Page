import { DefaultColor, AlignCenterBetween, textOverflowSafe } from "@Style/.";
import styled from "styled-components";

interface Props {
  type?: string;
}
export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 10%;
  margin: auto;
  ${AlignCenterBetween};
  border-bottom: 1px solid ${DefaultColor};
`;

export const Title = styled.p<Props>`
  width: 70%;
  font-size: ${({ type }) => (type === "small" ? "0.8rem" : "1.5rem")};
  font-weight: 700;
  ${textOverflowSafe};
`;

export const Text = styled.p<Props>`
  font-size: ${({ type }) => (type === "small" ? "0.3rem" : "0.8rem")};
  ${textOverflowSafe};
`;
