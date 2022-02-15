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
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ radius }) => radius};
`;

const EnterContainer = styled(ButtonContainer)`
  color: #6c6c6c;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 16px;
  font-size: 32px;
`;

export { ButtonContainer, LoginContainer, EnterContainer };
