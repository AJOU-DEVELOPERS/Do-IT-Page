import styled, { css } from "styled-components";

interface Props {
  type: string;
}

const TrueStyle = css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
`;

const FalseStyle = css`
  display: flex;
  justify-content: space-around;
`;

const MiddleStyle = css`
  /* width: 10%; */
`;

const Container = styled.div<Props>`
  ${({ type }) => type === "true" && TrueStyle}
  ${({ type }) => type === "false" && FalseStyle}
  ${({ type }) => type === "middle" && MiddleStyle}
`;

export { Container };
