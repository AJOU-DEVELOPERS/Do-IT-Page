import FirstContent from "@Organisms/Page/FirstContent";
import Header from "@Organisms/Header";
import Content from "@Organisms/Page/Content";
import Context from "@Molecules/Content";
import { CONTENT } from "@Constant/.";
import { Year } from "@Atoms/ContentImg/styles";
import MiddleContent from "@Organisms/Page/MiddleContent";
import ContentContainer from "./styles";

const PageTemplate = () => {
  return (
    <>
      <Header />
      <FirstContent />

      <ContentContainer>
        <Content
          text={() => Context(CONTENT[0])}
          type="true"
          url="/secondContent.png"
        />
      </ContentContainer>

      <Year>
        <img src="/year.png" />
      </Year>

      <MiddleContent />

      <ContentContainer>
        <Content
          text={() => Context(CONTENT[1])}
          type="false"
          url="/secondContent.png"
        />
      </ContentContainer>
      <ContentContainer>
        <Content
          text={() => Context(CONTENT[1])}
          type="true"
          url="/secondContent.png"
        />
      </ContentContainer>
    </>
  );
};

export default PageTemplate;
