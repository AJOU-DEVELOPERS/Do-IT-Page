import { HoverPointer } from "@Style/.";
import styled from "styled-components";

const BoardFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoardFooterItem = styled.div`
  color: #707070;
  ${HoverPointer};
  padding: 30px;
  padding-left: 0;
  &:hover {
    color: #d3d1d1;
  }
`;

export { BoardFooterContainer, BoardFooterItem };
