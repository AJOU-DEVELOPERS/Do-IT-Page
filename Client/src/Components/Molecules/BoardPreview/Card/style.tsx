import {
  AlignCenterAround,
  AlignCenterBetween,
  BlueColor,
  GreyColor,
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
  height: 30%;
  margin: 1vh 0px;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const Head = styled.div`
  display: flex;
  width: 80%;
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
