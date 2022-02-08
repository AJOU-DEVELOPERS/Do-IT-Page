import { useCallback } from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";

import FirstContent from "@Organisms/Page/FirstContent";
import Header from "@Organisms/Header";
import Content from "@Organisms/Page/Content";
import MiddleContent from "@Organisms/Page/MiddleContent";
import LastContent from "@Organisms/Page/LastContent";
import Last from "@Organisms/Page/Last";

import Context from "@Molecules/Content";
import { Year } from "@Atoms/ContentImg/styles";

import ContentContainer from "./styles";

import { CONTENT } from "@Constant/.";

const PageTemplate = ({ history }: { history: History }) => {
  const handleLoginClick = useCallback(() => {
    history.push("/login");
  }, []);

  return (
    <>
      <Header onClick={handleLoginClick} />
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

      <LastContent />

      <Last onClick={handleLoginClick} />
    </>
  );
};

export default withRouter(PageTemplate);
