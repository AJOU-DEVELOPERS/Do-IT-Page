import { BasicButtonProps, LoginButtonProps } from "@src/Common/Type";
import styled from "styled-components";

const ButtonContainer = styled.button<BasicButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: ${({ backGroundColor }) => backGroundColor};
  cursor: pointer;
`;

const LoginContainer = styled(ButtonContainer)<LoginButtonProps>`
  grid-area: ${({ grid }) => grid};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ radius }) => radius};
  box-shadow: 0px 0px 0px 1px rgba(93, 93, 93, 0.1);
`;

export { ButtonContainer, LoginContainer };
