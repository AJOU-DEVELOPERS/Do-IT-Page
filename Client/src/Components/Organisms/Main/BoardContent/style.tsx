import { MAIN_PREVIEW_IMAGE } from "@Constant/.";
import { DefaultBoxShadow } from "@Style/.";
import styled from "styled-components";

interface BoardProps {
  boardName: string;
}
interface ContentProps {
  alignPreview?: string;
}
const imageUrl = `
background-size:cover;
background-image:url(${MAIN_PREVIEW_IMAGE})`;

export const BoardContainer = styled.div<BoardProps>`
  grid-area: ${({ boardName }) => boardName};
  display: flex;
  flex-direction: column;
  box-shadow: ${DefaultBoxShadow};
  border-radius: 1rem;
  ${({ boardName }) => boardName === "이미지" && imageUrl};

  overflow: hidden;
`;

export const ContentContainer = styled.div<ContentProps>`
  display: flex;
  flex-direction: ${({ alignPreview }) => alignPreview};
  width: 90%;
  height: 85%;
  margin: auto;
`;
