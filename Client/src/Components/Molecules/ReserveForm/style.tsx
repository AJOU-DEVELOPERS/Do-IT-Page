import { DefaultBorderColor, DefaultColor } from "@Style/.";
import styled from "styled-components";

export const ReserveBoxTitle = styled.div`
  color: ${DefaultColor};
  border-bottom: 1px solid ${DefaultBorderColor};
  margin-bottom: 32px;
`;

export const ReservorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ReserveBoxText = styled.span`
  color: ${DefaultColor};
  font-size: 20px;
  margin-right: 15px;
`;

export const InputDataContainer = styled.div`
  width: 90%;
  margin: auto;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  span {
    display: flex;
    align-items: center;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReserveBoxSmallText = styled(ReserveBoxText)`
  font-size: 16px;
`;

export const SpliteTimeSpan = styled.span`
  margin: 10px 20px;
  font-size: 55px;
  display: flex;
  align-items: center;
`;

export const ReserveSmallInputType = {
  width: "140px",
  height: "35px",
};

export const ReserveLargeInputType = {
  width: "190px",
  height: "40px",
};
