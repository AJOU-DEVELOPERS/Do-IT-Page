import { TABLET_WIDTH } from "@Constant/.";
import { ImgProps } from "@src/Common/Type";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const FirstContainer = styled.div<ImgProps>`
  width: 100vw;
  height: 70vh;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
`;

const MainTitle = styled.div`
  position: absolute;
  top: 40%;
  left: 20%;
  font-size: 24px;
  width: 30%;
  height: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    width: 100vw;
    height: 5vh;
    color: #ffffff;
    padding: 10px;
    @media only screen and (max-width: ${TABLET_WIDTH}px) {
      font-size: medium;
    }
  }
`;

export { Container, FirstContainer, MainTitle };
