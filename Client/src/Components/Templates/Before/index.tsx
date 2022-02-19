import { useCallback } from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";

import DoItCarousel from "@Organisms/Before/DoItCarousel";
import Header from "@Organisms/Header";
import Content from "@Organisms/Before/Content";
import DoItTodo from "@Organisms/Before/DoItTodo";
import DoItInfo from "@Organisms/Before/DoItInfo";
import EnterDoIt from "@Organisms/Before/EnterDoIt";

import Context from "@Molecules/Content";
import { Year } from "@Atoms/ContentImg/styles";

import ContentContainer from "./styles";

import { CONTENT } from "@Constant/.";
import MainImg from "@Organisms/Before/MainImg";

const BeforePageTemplate = ({ history }: { history: History }) => {
  const handleLoginClick = useCallback(() => {
    history.push("/login");
  }, []);

  return (
    <>
      <Header onClick={handleLoginClick} />
      <DoItCarousel />
      <ContentContainer>
        <Content text={() => Context(CONTENT[0])} type="basic" />
      </ContentContainer>

      <Year>
        <img src="/assets/Content/year.png" height={500} />
      </Year>

      <DoItTodo />

      <DoItInfo />

      <MainImg />

      <EnterDoIt onClick={handleLoginClick} />
    </>
  );
};

export default withRouter(BeforePageTemplate);
