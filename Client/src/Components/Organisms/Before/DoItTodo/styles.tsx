import { TABLET_WIDTH } from "@Constant/.";
import styled from "styled-components";

const Box = styled.div`
  margin-top: 200px;
  background-color: #f5f5f5;
  opacity: 0.7;
  width: 100%;
  height: 500px;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    height: 100%;
    padding: 30px 0;
  }
`;

const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  height: 100%;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    flex-direction: column;
  }
`;

export { Box, Container };
