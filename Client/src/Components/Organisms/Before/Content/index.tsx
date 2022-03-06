import { Img, MiddleBox, MiddleImg } from "@Atoms/ContentImg/styles";
import { ImgProps } from "@src/Common/Type";
import { checkMobile } from "@Util/.";
import { Box, Container } from "./styles";

interface Props extends ImgProps {
  type: string;
  text: () => JSX.Element;
}

const Content = ({ type, url, text }: Props) => {
  return (
    <Container type={type}>
      {type === "basic" &&
        (url ? (
          <MiddleBox>
            <MiddleImg url={url} />
          </MiddleBox>
        ) : (
          <></>
        ))}
      {!checkMobile() && type !== "basic" && <Img alt="contentImage" src={url} loading="lazy" />}
      {text()}
      {type === "false" && <Box />}
    </Container>
  );
};

Content.defaultProps = {
  type: "basic",
};

export default Content;
