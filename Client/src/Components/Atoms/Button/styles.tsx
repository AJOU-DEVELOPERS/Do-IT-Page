import styled from "styled-components";
import { Props } from ".";

const ButtonContainer = styled.button<Props>`
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

export default ButtonContainer;
