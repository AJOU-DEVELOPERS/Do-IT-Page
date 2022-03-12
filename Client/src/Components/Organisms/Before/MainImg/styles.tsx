import { TABLET_WIDTH } from "@Constant/.";
import styled from "styled-components";

const MainImgContainer = styled.div`
  background-image: url("/assets/Content/main.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
  width: 100%;
  margin-top: 100px;
  height: 1020px;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    height: 30vh;
  }
`;

export default MainImgContainer;
