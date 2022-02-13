import { AlignCenterAround, GreyColor } from "@Style/.";
import styled from "styled-components";

export const ContenTitleContainer = styled.div`
  width: 80%;
  height: 100px;
  margin: 50px auto;
`;

export const BoardsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  ${AlignCenterAround}
`;

export const CalendarContainer = styled.div`
  height: 100vh;
  margin: 20vh auto;
  background: ${GreyColor};
`;
