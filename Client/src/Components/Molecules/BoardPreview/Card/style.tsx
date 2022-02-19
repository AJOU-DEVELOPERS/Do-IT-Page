import {
  AlignCenterAround,
  AlignCenterBetween,
  BlueColor,
  GreyColor,
  MainItemHover,
} from "@Style/.";

import styled from "styled-components";

interface ContainerProps {
  backgroundColor?: string;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background: ${({ backgroundColor = GreyColor }) => backgroundColor};
  ${AlignCenterAround}
  border-radius: 15px;
  height: 100%;
  min-height: 130px;
  width: 100%;
  margin: 1vh 0px;
  font-size: 0.8rem;
  cursor: pointer;
  ${MainItemHover};
`;

export const Head = styled.div`
  display: flex;
  width: 80%;
  padding-top: 5px;
  color: #42556b;
  ${AlignCenterBetween};
`;

export const Status = styled.p`
  color: ${BlueColor};
  font-size: 0.6rem;
`;

export const Title = styled.p`
  width: 80%;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 80%;
  ${AlignCenterBetween}
`;

export const Info = styled.p``;
