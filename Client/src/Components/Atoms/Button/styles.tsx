import styled from "styled-components";
import { Props } from ".";

const ButtonContainer = styled.div<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backGroundColor }) => backGroundColor};
  cursor: pointer;
`;

export default ButtonContainer;
