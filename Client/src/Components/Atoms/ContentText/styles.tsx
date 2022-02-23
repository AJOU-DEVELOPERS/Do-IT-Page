import { textOverflowSafe } from "@Style/.";
import styled, { css } from "styled-components";

const CommonStyle = css`
  margin: auto;
  margin-top: 10px;
  width: 90%;
  overflow-y: scroll;
  /* ${textOverflowSafe}; */
`;

const PreviewContentText = styled.p`
  height: 40%;
  ${CommonStyle}
  font-size: 0.8rem;
`;

const BasicText = styled.p`
  font-size: 1.5rem;
  ${CommonStyle}
  overflow-y: hidden;
`;

export { BasicText, PreviewContentText };
