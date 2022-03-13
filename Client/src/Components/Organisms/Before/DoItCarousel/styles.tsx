import { TABLET_WIDTH } from "@Constant/.";
import { ImgProps } from "@src/Common/Type";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const FirstContainer = styled.div<ImgProps>`
  width: 100vw;
  min-height: 80vh;
  position: relative;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  opacity: 50%;
  background-position: center;
  background-size: cover;
  z-index: 2;
`;
const FirstCropContainer = styled(FirstContainer)`
  background-size: auto;
  background-position: bottom;
  position: absolute;
  opacity: 100%;
  z-index: 3;
`;
const MainTitle = styled.div`
  position: absolute;
  top: 40%;
  left: 20%;
  font-size: 24px;
  width: 80%;
  height: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    width: 80vw;
    height: 5vh;
    color: #ffffff;
    padding: 10px;
    font-size: 2rem;
    @media only screen and (max-width: ${TABLET_WIDTH}px) {
      font-size: 1.6rem;
    }
  }
`;

export { Container, FirstContainer, FirstCropContainer, MainTitle };
