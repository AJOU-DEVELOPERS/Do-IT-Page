import { TABLET_WIDTH } from "@Constant/.";
import styled from "styled-components";

const Container = styled.div`
  margin: 100px 0;
`;

const Box = styled.div`
  width: 500px;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    width: 50vw;
    height: 50vh;
  }
`;

const ButtonContainer = styled.div`
  padding: 50px;
`;

export { Container, Box, ButtonContainer };
