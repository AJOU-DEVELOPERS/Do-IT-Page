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
  background-color: ${({ backGroundColor }) => backGroundColor};
  cursor: pointer;
`;

const LoginContainer = styled(ButtonContainer)<LoginButtonProps>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ radius }) => radius};
`;

export { ButtonContainer, LoginContainer };
