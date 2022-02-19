import styled, { css } from "styled-components";

interface TitleProps {
  type: string | undefined;
}

const Title = styled.h1<TitleProps>`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 10px;
  padding: 20px 0;

  color: #707070;
  span {
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

const InfoStyle = css`
  margin-bottom: 40px;
`;

const TodoTitleStyle = css`
  margin-top: 20px;
`;
const TodoTextStyle = css`
  font-size: 16px;
`;
export { Title, Text };
