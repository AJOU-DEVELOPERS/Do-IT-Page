import { AlignCenterAround } from "@Style/.";
import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  ${AlignCenterAround}
  margin-top:-10vh;
`;

export const Button = styled.button`
  background-color: #0f7b6c;
  border-radius: 5px;
  width: 100px;
  height: 50px;
  color: white;
`;

export const AcceptButton = styled(Button)`
  background-color: #0f7b6c;
`;

export const DenyButton = styled(Button)`
  background-color: #ff7369;
`;
