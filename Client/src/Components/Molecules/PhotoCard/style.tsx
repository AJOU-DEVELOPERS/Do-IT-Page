import { HoverPointer } from "@Style/.";
import { ImgAltProps } from "@Type/.";
import styled from "styled-components";

export const PhotoImage = styled.image<ImgAltProps>`
  width: 24%;
  margin: 1vh auto;
  content: url(${({ url }) => url});
  ${HoverPointer}
`;
