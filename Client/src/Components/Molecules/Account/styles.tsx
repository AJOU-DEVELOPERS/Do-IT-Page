import styled from "styled-components";
import { LoginProps } from "@Type/index";
import { MOBILE_WIDTH, TABLET_WIDTH } from "@Constant/.";
const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
`;

const LoginContainer = styled(Container)`
  width: 30vw;
  height: 40vh;
  display: grid;
  grid-template:
    ". title title ." 6fr
    ". id button ." 2fr
    ". pwd button ." 2fr
    ". footer footer ." 6fr
    / 1fr 6fr 2fr 1fr;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    min-width: 80vw;
  }
`;
const RegisterContainer = styled(Container)`
  min-width: 30vw;
  height: 60vh;
  display: grid;
  grid-template:
    ". title . " 2fr
    ". section ." 8fr
    ". button ." 2fr
    / 1fr 6fr 1fr;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    min-width: 80vw;
  }
`;

const Wrapper = styled(Container)<LoginProps>`
  display: flex;
  width: 100%;
  height: 80%;
  align-items: center;
  color: rgba(93, 93, 93);
  justify-content: space-evenly;
  font-weight: bold;
  grid-area: ${({ type }) => type};
  p {
    width: 2vw;
    text-align: center;
  }
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    p {
      font-size: small;
    }
    Input {
      font-size: small;
    }
  }
`;
const Section = styled.div`
  grid-area: section;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Footer = styled.div`
  grid-area: footer;
  display: flex;
  column-gap: 10px;
  font-size: 0.8rem;

  p {
    cursor: pointer;
  }
`;

const Title = styled.h1`
  grid-area: title;
  align-self: center;
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: rgba(93, 93, 93);
  font-weight: bold;
`;

const SubWrapper = styled.div`
  align-items: center;
  column-gap: 20px;
  display: flex;
`;

export {
  Container,
  Title,
  Wrapper,
  SubWrapper,
  LoginContainer,
  RegisterContainer,
  Footer,
  Section,
};
