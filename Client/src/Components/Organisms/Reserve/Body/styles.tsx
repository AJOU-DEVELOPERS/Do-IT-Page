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
`;

export const ToggleButtonContainer = styled.div`
  width: 200px;
  height: 50px;
  position: absolute;
  top: 10px;
  left: 50%;
`;
