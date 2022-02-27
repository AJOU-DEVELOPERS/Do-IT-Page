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
  width: 80%;
  border-bottom: ${({ borderBottom }) => borderBottom};
`;
const Info = styled.p`
  font-size: 1rem;
`;

const Content = styled.div`
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 30%;
  column-gap: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 80%;
  ${AlignCenterBetween}
`;
export { Background, Content, Wrapper, Title, Info, Container };
