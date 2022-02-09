import { ImgProps } from "@src/Common/Type";
import styled from "styled-components";

const Img = styled.img<ImgProps>`
  content: url(${({ url }) => url});
  width: 45%;
`;

const MiddleBox = styled.div`
  background: #ffffff;
  border-radius: 100%;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export { Img, Year, MiddleImg, MiddleBox };
