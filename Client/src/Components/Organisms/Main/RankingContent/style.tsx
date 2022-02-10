import { AlignCenterAround, GreyColor } from "@Style/.";
import styled from "styled-components";

export const ContenTitleContainer = styled.div`
  width: 80%;
  hieght: 100px;
  margin: 200px auto 20px auto;
`;

export const ContentContainer = styled.div`
  width: 100vw;
  height: 50vh;
  background: ${GreyColor};
  display: flex;
  padding: 0px 7vw;
  margin: 30px auto;
  flex-direction: column;
  ${AlignCenterAround}
`;
