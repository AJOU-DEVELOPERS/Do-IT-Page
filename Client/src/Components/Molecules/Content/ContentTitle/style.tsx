import { TABLET_WIDTH } from "@Constant/index";
import { DefaultColor, AlignCenterBetween, textOverflowSafe } from "@Style/.";
import styled from "styled-components";

interface Props {
  type?: string;
}
export const Container = styled.div`
  display: flex;
  width: 90%;
  height: 10%;
  margin: 15px auto 0 auto;
  padding-bottom: 5px;
  ${AlignCenterBetween};
  border-bottom: 1px solid ${DefaultColor};
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    padding-bottom: 10px;
  }
`;

export const Title = styled.p<Props>`
  width: 70%;
  font-size: ${({ type }) => (type === "small" ? "0.8rem" : "1.5rem")};
  font-weight: 700;
  ${textOverflowSafe};
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 1.05rem;
  }
`;

export const Text = styled.p<Props>`
  font-size: ${({ type }) => (type === "small" ? "0.3rem" : "0.8rem")};
  ${textOverflowSafe};
`;
