import { TABLET_WIDTH } from "@Constant/.";
import styled, { css } from "styled-components";

interface Props {
  type: string;
}

const TrueStyle = css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    justify-content: center;
  }
`;

const FalseStyle = css`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    justify-content: center;
  }
`;

const Box = styled.div`
  width: 10%;
  height: 100%;
`;

const Container = styled.div<Props>`
  text-align: center;
  ${({ type }) => type === "true" && TrueStyle}
  ${({ type }) => type === "false" && FalseStyle}

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    padding: 40px 0;
  }
`;

export { Container, Box };
