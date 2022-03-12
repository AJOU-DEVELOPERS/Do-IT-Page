import styled from "styled-components";

const PageContainer = styled.img`
  content: url("/assets/MainPage/mainBg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
`;

const BodyContainer = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
`;

export { PageContainer, HeaderContainer, BodyContainer };
