import { TABLET_WIDTH } from "@Constant/.";
import { ContentImgProps, ImgProps } from "@src/Common/Type";
import styled from "styled-components";

const Img = styled.img<ImgProps>`
  width: ${({ width }) => (width ? width : "45%")};
`;

const ContentImg = styled(Img)<ContentImgProps>`
  border-radius: ${({ radius }) => (radius ? radius : "0px")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    max-width: 50%;
  }
`;

const MiddleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const MiddleImg = styled.div<ImgProps>`
  background: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 150px;
  height: 150px;
`;

const Year = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

export { Img, Year, MiddleImg, MiddleBox, ContentImg };
