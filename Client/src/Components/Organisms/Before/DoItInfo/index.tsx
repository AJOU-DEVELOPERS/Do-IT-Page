import { CONTENT, LAST_IMG_URL } from "@Constant/.";
import Context from "@Molecules/Content";
import Content from "@Organisms/Before/Content";
import ContentContainer from "./styles";

const DoItInfo = () => {
  return (
    <>
      {LAST_IMG_URL.map((url, idx) => (
        <ContentContainer>
          <Content
            text={() => Context(CONTENT[idx + 4])}
            key={idx}
            type={idx % 2 === 0 ? "true" : "false"}
            url={url}
          />
        </ContentContainer>
      ))}
    </>
  );
};

export default DoItInfo;
