import { DefaultBoxShadow } from "@Style/.";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  position: fixed;
  left: 30vw;
  top: 20vh;
  width: 30vw;
  height: 70vh;
  border: 1px solid #b3b0b0;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const Button = styled.button`
  position: absolute;
  margin: 3% 0% 3% 90%;
  width: 20px;
  font-size: 20px;
  font-weight: 700;
`;
