import { ImgProps } from "@Type/.";
import styled from "styled-components";

const Container = styled.img<ImgProps>`
  width: 5vmin;
  height: 5vmin;
  content: url(${({ url }) => url})});
`;

export default Container;
