import { AlignCenterAround, GreyColor, DefaultColor } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 230vh;
  margin: auto;
  ${AlignCenterAround}
  background-color: ${GreyColor};
`;

export const TitleContainer = styled.div`
  text-align: center;
  font-size: 32px;
  padding: 30px 0 50px 0;
  color: ${DefaultColor};
`;
