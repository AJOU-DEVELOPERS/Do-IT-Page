import { DefaultBorderColor, DefaultColor, HoverPointer } from "@Style/.";
import styled from "styled-components";

export const WeekTitleContainer = styled.div`
  margin: 23px 0 13px 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;

  span {
    color: ${DefaultColor};
  }
`;

export const CalendarContainer = styled.div`
  display: grid;
  min-height: 400px;
  min-width: 400px;
  grid-template-rows: repeat(auto-fit, minmax(20%, auto));
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 30px #00000029;
  border-radius: 20px;
  padding: 5px;
`;

export const WeekContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  span {
    ${HoverPointer};
    color: ${DefaultColor};
    border-bottom: 1px solid ${DefaultBorderColor};
    border-right: 1px solid ${DefaultBorderColor};
    padding: 10px;
    &:nth-child(7) {
      border-right: none;
    }
    &:hover {
      border-color: black;
      border-left: 1px solid black;
      border-top: 1px solid black;
    }
  }
  .isTrue {
    background-color: #74d9f8;
    border-color: #74d9f8;
    &:hover {
      border-color: #74d9f8;
      background-color: #74d9f8;
    }
  }

  &:last-child {
    span {
      border-bottom: none;
    }
  }
`;
