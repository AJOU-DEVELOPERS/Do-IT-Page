import { BasicInputProps } from "@src/Common/Type";
import { HoverPointer } from "@Style/.";
import styled from "styled-components";

const Container = styled.input<BasicInputProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1px solid ${({ borderColor }) => borderColor};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  box-shadow: ${({ shadow }) => shadow};
  background: ${({ background }) => background};
  border-radius: ${({ radius }) => radius};
  ${HoverPointer};

  &:focus {
    outline: none;
  }
`;

export default Container;
