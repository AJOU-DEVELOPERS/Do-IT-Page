import { Img, MiddleBox, MiddleImg } from "@Atoms/ContentImg/styles";
import { ImgProps } from "@src/Common/Type";
import { Container } from "./styles";

interface Props extends ImgProps {
  type: string;
  text: () => JSX.Element;
}

const Content = ({ type, url, text }: Props) => {
  return (
    <Container type={type}>
      {type === "middle" && (
        <MiddleBox>
          <MiddleImg url={url} />
        </MiddleBox>
      )}
      {type !== "middle" && <Img alt="contentImage" url={url} />}
      {text()}
    </Container>
  );
};

export default Content;
