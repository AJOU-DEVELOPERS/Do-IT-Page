import { DefaultBorderColor } from "@Style/.";
import styled from "styled-components";

export const Label = styled.div`
  padding: 10px;
  div {
    font-size: 20px;
    padding: 5px;
  }
  input {
    padding: 3px 5px;
    height: 30px;
    border: 1px solid ${DefaultBorderColor};
    width: 300px;
  }
`;
