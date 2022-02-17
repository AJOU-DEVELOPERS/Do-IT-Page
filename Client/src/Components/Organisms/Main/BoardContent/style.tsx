import { MAIN_PREVIEW_IMAGE } from "@Constant/.";
import { DefaultBoxShadow } from "@Style/.";
import { BoardType } from "@Type/.";
import styled from "styled-components";

interface Props {
  boardName: string;
}
const imageUrl = `
background-size:cover;
background-image:url(${MAIN_PREVIEW_IMAGE})`;

export const BoardContainer = styled.div<Props>`
  grid-area: ${({ boardName }) => boardName};
  display: flex;
  flex-direction: column;
  box-shadow: ${DefaultBoxShadow};
  border-radius: 1rem;
  ${({ boardName }) => boardName === "이미지" && imageUrl};
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 90%;
  height: 85%;
  margin: auto;
`;
