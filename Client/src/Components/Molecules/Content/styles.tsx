import { DefaultColor } from "@Style/.";
import styled, { css } from "styled-components";

interface TitleProps {
  type: string | undefined;
}
const ModalContainer = styled.div`
  width: 320px;
  height: 300px;
  align-items: center;
  display: flex;
  padding: 2vw;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  h2 {
    padding: 1rem;
    font-size: large;
  }
`;

const Container = styled.div`
  padding: 4vw;
`;

const Title = styled.h1<TitleProps>`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 10px;
  padding: 20px 0;

  color: ${DefaultColor} span {
    color: #000000;
    font-size: 48px;
  }

  ${({ type }) => type === "Info" && InfoStyle};
  ${({ type }) => type === "Todo" && TodoTitleStyle};
`;

const Text = styled.div<TitleProps>`
  margin-top: 10px;
  font-size: 20px;
  color: #858383;
  ${({ type }) => type === "Info" && InfoStyle};
  ${({ type }) => type === "Todo" && TodoTextStyle};
`;

const Wrapper = styled.div`
  width: 100%;
`;

const InfoStyle = css`
  margin-bottom: 40px;
`;

const TodoTitleStyle = css`
  margin-top: 20px;
`;
const TodoTextStyle = css`
  font-size: 16px;
`;
export { Title, Text, Container, ModalContainer, Wrapper };
