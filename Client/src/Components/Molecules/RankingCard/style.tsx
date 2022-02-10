import { AlignCenterAround } from "@Style/.";
import styled from "styled-components";

export const CardContainer = styled.div`
  background: white;
  display: flex;
  width: 75%;
  height: 25%;
  ${AlignCenterAround}
`;

export const Name = styled.p`
  font-size: 18px;
`;

export const Info = styled.p`
  font-size: 12px;
`;
