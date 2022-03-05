import styled from "styled-components";
import { AlignCenterBetween } from "@Style/.";
interface TitleProps {
  borderBottom?: string;
}

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
`;
const Title = styled.p<TitleProps>`
  border-bottom: ${({ borderBottom }) => borderBottom};
  text-align: left;
  padding: 1rem 0;
`;
const Info = styled.p`
  font-size: 1rem;
  padding: 1rem 0;
`;

const Content = styled.div`
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  column-gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
export {
  Background,
  Content,
  Wrapper,
  Title,
  Info,
  Container,
  ButtonContainer,
};
