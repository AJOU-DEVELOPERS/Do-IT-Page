import { TABLET_WIDTH } from "@Constant/.";
import { DefaultColor } from "@Style/.";
import styled from "styled-components";

const TitleContainer = styled.div`
  text-align: center;
  font-size: 32px;
  padding: 30px 0 50px 0;
  color: ${DefaultColor};
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 25px;
    padding: 20px 0 20px 0;
  }
`;

const BoardListContainer = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  padding: 30px 0;
  min-height: 50vh;
`;

export { TitleContainer, BoardListContainer };
