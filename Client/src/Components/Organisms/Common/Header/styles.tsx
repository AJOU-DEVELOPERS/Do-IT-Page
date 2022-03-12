import { TABLET_WIDTH } from "@Constant/index";
import styled from "styled-components";

const Container = styled.div`
  width: 80vw;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    height: 80px;
  }
`;

const LeftAdminContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 10vw;
`;

export { Container, LeftAdminContainer };
