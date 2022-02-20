import { HoverPointer, DefaultColor } from "@Style/.";
import styled from "styled-components";

export const CalendarHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span:nth-child(2) {
    margin: 0 40px;
  }
  span {
    ${HoverPointer}
    font-size: 32px;
    color: ${DefaultColor};
  }
`;
