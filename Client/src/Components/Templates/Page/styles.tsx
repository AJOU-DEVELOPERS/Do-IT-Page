import { TABLET_WIDTH } from "@Constant/.";
import styled from "styled-components";

const PageContainer = styled.img`
  content: url("/assets/MainPage/mainBg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    margin-top: 100px;
    height: auto;
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;

  div #Header__Title {
    color: #ffffff;
    @media only screen and (max-width: ${TABLET_WIDTH}px) {
      color: #707070;
    }
  }
`;

const BodyContainer = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    right: 10px;
  }
`;

export { PageContainer, HeaderContainer, BodyContainer };
