import { DefaultBorderColor } from "@Style/.";
import styled from "styled-components";

export const StudyFilterBarContainer = styled.div`
  padding: 20px;
`;

export const Select = styled.select`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${DefaultBorderColor};
  padding: 3px 5px;
`;
