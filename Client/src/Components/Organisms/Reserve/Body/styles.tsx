import { TABLET_WIDTH } from "@Constant/.";
import { BoardListContainer } from "@Organisms/BoardBody/styles";
import styled from "styled-components";

export const ReserveCalendarContainer = styled.div`
  width: 50%;
  margin-right: 20px;
  min-width: 480px;
  position: relative;
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
    width: 500px;
    top: auto;
    left: auto;
  }
`;

export const ToggleButtonContainer = styled.div`
  width: 200px;
  height: 50px;
  position: absolute;
  top: 10px;
  left: 50%;
`;
