import { TABLET_WIDTH } from "@Constant/.";
import { BasicInputProps } from "@src/Common/Type";
import { HoverPointer } from "@Style/.";
import styled from "styled-components";

export const Container = styled.input<BasicInputProps>`
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

export const ReserveInput = styled.input<{ height: string; width: string }>`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 38px #00000029;
  border-radius: 14px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 0 10px;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    width: 150px;
    height: 30px;
  }
`;
