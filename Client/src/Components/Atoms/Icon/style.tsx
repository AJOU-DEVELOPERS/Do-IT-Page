import { ImgProps } from "@Type/.";
import styled from "styled-components";

const Container = styled.img<ImgProps>`
  height: 80%;
  content: url(${({ url }) => url})});
`;

export default Container;
