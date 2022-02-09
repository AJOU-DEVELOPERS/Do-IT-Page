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
    color: #ffffff;
    padding: 10px;
  }
`;

export { Container, FirstContainer, MainTitle };
