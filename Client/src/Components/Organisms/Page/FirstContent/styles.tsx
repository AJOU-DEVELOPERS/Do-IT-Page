import styled from "styled-components";

interface Props {
  url: string;
}
const FirstContainer = styled.div<Props>`
  width: 100vw;
  height: 80vh;
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
`;

export default FirstContainer;
