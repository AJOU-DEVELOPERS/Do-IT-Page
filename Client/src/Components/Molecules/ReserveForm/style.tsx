import { TABLET_WIDTH } from "@Constant/.";
import { DefaultBorderColor, DefaultColor } from "@Style/.";
import styled from "styled-components";

export const ReserveBoxTitle = styled.div`
  color: ${DefaultColor};
  border-bottom: 1px solid ${DefaultBorderColor};
  margin-bottom: 32px;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    padding-bottom: 5px;
    font-size: 22px;
    font-weight: 500;
  }
`;

export const ReservorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    justify-content: center;
  }
`;

export const ReserveBoxText = styled.span`
  color: ${DefaultColor};
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 16px;
  }
`;

export const InputDataContainer = styled.div`
  width: 90%;
  margin: auto;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    width: 270px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  span {
    display: flex;
    align-items: center;
    @media only screen and (max-width: ${TABLET_WIDTH}px) {
      font-size: 15px;
    }
  }
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 270px;
    height: 70px;
    margin-bottom: 10px;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    width: 270px;
    flex-direction: column;
    align-items: center;
  }
`;

export const ReserveBoxSmallText = styled(ReserveBoxText)`
  font-size: 16px;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 15px;
  }
`;

export const SpliteTimeSpan = styled.span`
  margin: 10px 20px;
  font-size: 55px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    display: none;
  }
`;

export const ReserveSmallInputType = {
  width: "140px",
  height: "35px",
};

export const ReserveLargeInputType = {
  width: "190px",
  height: "40px",
};

export const SpiltTimeSpanMobile = styled.span`
  display: none;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    display: inline;
    font-size: 20px;
  }
`;

export const SplitTimeSpanContainer = styled.div`
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    display: flex;
    justify-content: center;
    width: 270px;
    margin-top: 10px;
    input {
      margin-left: 15px;
      margin-right: -16px;
    }
  }
`;
