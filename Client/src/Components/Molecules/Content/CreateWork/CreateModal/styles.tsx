import { DefaultBorderColor } from "@Style/.";
import styled from "styled-components";

export const ModalContainer = styled.div`
  min-width: 500px;
  min-height: 400px;
  padding: 10px 0;
  position: fixed;
  top: auto;
  left: 35%;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #707070;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

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
