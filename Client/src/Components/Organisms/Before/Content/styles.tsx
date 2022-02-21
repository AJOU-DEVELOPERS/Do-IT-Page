import styled, { css } from "styled-components";

interface Props {
  type: string;
}

const TrueStyle = css`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const FalseStyle = css`
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  width: 10%;
  height: 100%;
`;

const Container = styled.div<Props>`
  text-align: center;
  ${({ type }) => type === "true" && TrueStyle}
  ${({ type }) => type === "false" && FalseStyle}
`;

export { Container, Box };
