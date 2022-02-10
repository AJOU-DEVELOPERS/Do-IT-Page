import { AlignCenterAround } from "@Style/.";
import styled from "styled-components";

export const ContenTitleContainer = styled.div`
  width: 80%;
  hieght: 100px;
  margin: 50px auto;
`;

export const BoardsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  ${AlignCenterAround}
`;
