import { DefaultBoxShadow } from "@Style/.";
import { BoardType } from "@Type/.";
import styled from "styled-components";

interface Props {
  boardName: string;
}
export const BoardContainer = styled.div<Props>`
  grid-area: ${({ boardName }) => boardName};
  display: flex;
  box-shadow: ${DefaultBoxShadow};
`;
export const ContenTitleContainer = styled.div`
  width: 80%;
  margin: 40px auto;
  &::after {
    content: "";
    display: block;
    margin: 10px 0px -10px 0px;
    border-bottom: 1px solid;
  }
`;
