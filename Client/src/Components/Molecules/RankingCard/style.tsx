import { AlignCenterAround, HoverPointer } from "@Style/.";
import { ImgAltProps } from "@Type/.";
import styled from "styled-components";

export const CardContainer = styled.div`
  background: white;
  display: flex;
  width: 100%;
  height: 24%;
  ${AlignCenterAround}
  ${HoverPointer}
`;

export const Name = styled.p`
  font-size: 18px;
`;

export const Info = styled.img<ImgAltProps>`
  max-width: 100%;
  width: 100%;
  min-height: 90%;
  height: 10vh;
  content: url(${({ url }) => url});
`;
