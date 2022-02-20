import { DefaultBorderColor, DefaultColor } from "@Style/.";

import styled from "styled-components";

export const ReserveBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 15px #00000029;
  border-radius: 21px;
  padding: 40px;
`;

export const ReserveBoxTitle = styled.div`
  color: ${DefaultColor};
  border-bottom: 1px solid ${DefaultBorderColor};
  margin-bottom: 32px;
`;

export const ReserveBoxText = styled.span`
  color: ${DefaultColor};
  font-size: 20px;
  margin-right: 15px;
`;

export const ReserveBoxSmallText = styled(ReserveBoxText)`
  font-size: 16px;
`;

export const SpliteTimeSpan = styled.span`
  margin: 0 20px;
  font-size: 55px;
  display: flex;
  align-items: center;
`;

export const TimerContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ReservorContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin: auto;
`;
