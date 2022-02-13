import { useCallback } from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";

import DoItCarousel from "@Organisms/Page/DoItCarousel";
import Header from "@Organisms/Header";
import Content from "@Organisms/Page/Content";
import DoItTodo from "@Organisms/Page/DoItTodo";
import DoItInfo from "@Organisms/Page/DoItInfo";
import EnterDoIt from "@Organisms/Page/EnterDoIt";

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
      <DoItCarousel />

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

      <DoItTodo />

      <DoItInfo />

      <EnterDoIt onClick={handleLoginClick} />
    </>
  );
};

export default withRouter(PageTemplate);
