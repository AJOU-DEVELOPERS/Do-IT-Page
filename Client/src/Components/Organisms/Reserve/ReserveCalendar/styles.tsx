import { TABLET_WIDTH } from "@Constant/.";
import { DefaultBorderColor, DefaultColor } from "@Style/.";
import styled from "styled-components";

export const ReserveCalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 15px #00000029;
  border-radius: 21px;
  padding: 40px;
  min-width: 480px;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    min-width: 375px;
  }
`;

export const ReserveCalendarTitle = styled.p`
  font-size: 20px;
  color: ${DefaultColor};
  padding-bottom: 5px;
  margin-bottom: 25px;
  border-bottom: 1px solid ${DefaultBorderColor};
`;
