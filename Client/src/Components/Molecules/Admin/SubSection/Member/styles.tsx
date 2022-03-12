import { AlignCenterAround } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  overflow-y: scroll;
  margin: auto;
`;

export const InfoContainer = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  margin-top: 1vh;
  width: 100%;
  ${AlignCenterAround};
`;

export const HeaderText = styled.p`
  font-size: 1rem;
  color: #0f7b6c;
`;
