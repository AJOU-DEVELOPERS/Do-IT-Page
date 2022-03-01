import { AlignCenterAround, AlignCenterBetween, BlueColor, GreyColor, HoverPointer, MainItemHover } from "@Style/.";

import styled from "styled-components";

interface ContainerProps {
  backgroundColor?: string;
}
interface TitleProps {
  borderBottom?: string;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background: ${({ backgroundColor = GreyColor }) => backgroundColor};
  border-radius: 15px;
  width: 100%;
  min-height: 16vh;
  margin: 1vh 0px;
  font-size: 0.8rem;
  box-shadow: 0px 0px 5px 1px rgba(93, 93, 93, 0.1);
  ${AlignCenterAround}
  ${HoverPointer};
  ${MainItemHover};
`;
export const LargeContainer = styled(Container)`
  height: 40vh;
  justify-content: space-evenly;
`;
export const Head = styled.div`
  display: flex;
  width: 80%;
  padding-top: 5px;
  color: ${BlueColor};
  ${AlignCenterBetween};
`;

export const Status = styled.p`
  color: ${BlueColor};
  font-size: 0.6rem;
`;

export const Title = styled.p<TitleProps>`
  width: 80%;
  border-bottom: ${({ borderBottom }) => borderBottom};
`;

export const CollectingInfoContainer = styled.div`
  display: flex;
  width: 80%;
  ${AlignCenterBetween}
`;

export const ProcessingInfoContainer = styled(CollectingInfoContainer)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 20vh;
`;

export const Info = styled.p`
  font-size: 1rem;
`;
