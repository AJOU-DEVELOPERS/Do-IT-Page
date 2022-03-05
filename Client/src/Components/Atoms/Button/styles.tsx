import { TABLET_WIDTH } from "@Constant/.";
import {
  ApplyButtonProps,
  BasicButtonProps,
  LoginButtonProps,
} from "@src/Common/Type";
import { HoverPointer } from "@Style/.";
import styled from "styled-components";

const ButtonContainer = styled.button<BasicButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  background-color: ${({ backGroundColor }) => backGroundColor};
  ${HoverPointer};
`;

const LoginContainer = styled(ButtonContainer)<LoginButtonProps>`
  grid-area: ${({ grid }) => grid};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ radius }) => radius};
  box-shadow: 0px 0px 0px 1px rgba(93, 93, 93, 0.1);
`;

const EnterContainer = styled(ButtonContainer)`
  color: #6c6c6c;
  box-shadow: 0px 0px 6px #00000029;
  border-radius: 16px;
  font-size: 32px; 
`;

const ApplyContainer = styled(ButtonContainer)<ApplyButtonProps>`
  color: ${({ color }) => color};
`;

export { ButtonContainer, LoginContainer, EnterContainer, ApplyContainer };
