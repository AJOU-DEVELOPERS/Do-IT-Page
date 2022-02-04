import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackGround = styled.img`
  width: 100vw;
  height: 100vh;
  background-image: url("/loginBg.jpeg");
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

export { BackGround, Container };
