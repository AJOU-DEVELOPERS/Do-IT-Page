import { TABLET_WIDTH } from "@Constant/.";
import { BoardListContainer } from "@Organisms/BoardBody/styles";
import styled from "styled-components";

export const ReserveCalendarContainer = styled.div`
  width: 50%;
  margin-right: 20px;
  min-width: 480px;
  position: relative;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    min-width: 375px;
    margin: 0;
  }
`;

export const ReserveBodyContainer = styled(BoardListContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ReserveBoxContainer = styled.div`
  width: 40%;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    position: fixed;
    width: 350px;
    top: auto;
    left: auto;
    height: 470px;
  }
`;

export const ToggleButtonContainer = styled.div`
  width: 200px;
  height: 50px;
  position: absolute;
  top: 10px;
  left: 50%;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    width: 150px;
    height: 30px;
    top: 35px;
    left: 55%;
  }
`;
