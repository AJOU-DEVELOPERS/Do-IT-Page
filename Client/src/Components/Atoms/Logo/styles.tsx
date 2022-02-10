import { ImgProps } from "@Type/.";
import styled from "styled-components";

const Container = styled.img<ImgProps>`
  width: 50px;
  height: 50px;
  content: url(${({ url }) => url})});
`;

export default Container;
