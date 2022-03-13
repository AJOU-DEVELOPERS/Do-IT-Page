import { TABLET_WIDTH } from "@Constant/.";
import {
  AlignCenterAround,
  AlignCenterBetween,
  BlueColor,
  GreyColor,
  HoverPointer,
  MainItemHover,
} from "@Style/.";

import styled from "styled-components";

interface ContainerProps {
  backgroundColor?: string;
}
interface TitleProps {
  borderBottom?: string;
}
interface HeaderProps {
  status?: string;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background: ${({ backgroundColor = GreyColor }) => backgroundColor};
  border-radius: 15px;
  width: 100%;
  min-height: 20vh;
  margin: 1vh 0px;
  font-size: 0.8rem;
  box-shadow: 0px 0px 5px 1px rgba(93, 93, 93, 0.1);
  ${AlignCenterAround}
  ${HoverPointer};
  ${MainItemHover};
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    button {
      width: 50px;
    }
  }
`;
export const Head = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-around;
  width: 80%;
  padding-top: 5px;
  color: ${BlueColor};
  ${AlignCenterBetween};
  margin-top: ${(props) => (props.status === "processing" ? "15px" : "5px")};
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    margin-top: 5px;
  }
`;

export const Status = styled.p`
  color: whitesmoke;
  text-align: center;
  width: 60px;
  padding: 5px;
  border-radius: 15px;
  font-size: 0.8rem;
  background-color: ${BlueColor};
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    width: 60px;
  }
`;

export const Title = styled.p<TitleProps>`
  width: 80%;
  border-bottom: ${({ borderBottom }) => borderBottom};
  margin-top: 10px;
`;

export const ProcessingTitle = styled.p`
  width: 80%;
  font-size: 18px;
  margin-top: 10px;
  padding-bottom: 5px;
  border-bottom: 0.2px solid rgba(112, 112, 112, 1);
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 15px;
  }
`;

export const CollectingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    p {
      font-size: 13px;
    }
  }
`;

export const ProcessingInfoContainer = styled(CollectingInfoContainer)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 15vh;
`;

export const Info = styled.p`
  font-size: 0.8rem;
  margin-top: 10px;
  &:first-child {
    margin: 0;
  }
`;

export const MobileApplyBtnContainer = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  button {
    width: 80px;
    height: 30px;
  }
`;
