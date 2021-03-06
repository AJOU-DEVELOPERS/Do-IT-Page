import { useCallback } from "react";

import DoItCarousel from "@Organisms/Before/DoItCarousel";
import Header from "@Organisms/Common/Header";
import Content from "@Organisms/Before/Content";
import DoItTodo from "@Organisms/Before/DoItTodo";
import DoItInfo from "@Organisms/Before/DoItInfo";
import EnterDoIt from "@Organisms/Before/EnterDoIt";

import Context from "@Molecules/Content";
import { Year } from "@Atoms/ContentImg/styles";

import ContentContainer from "./styles";

import { CONTENT } from "@Constant/.";
import MainImg from "@Organisms/Before/MainImg";
import { useNavigate } from "react-router-dom";
import Arrow from "@Atoms/Arrow";

const BeforePageTemplate = () => {
  const navigator = useNavigate();
  const handleLoginClick = useCallback(() => {
    navigator("/login");
  }, []);
  return (
    <>
      <Header onClick={handleLoginClick} />
      <DoItCarousel />
      <div style={{ textAlign: "center", width: "100%", padding: "2vh" }}>
        <Arrow />
      </div>
      <ContentContainer>
        <Content text={() => Context(CONTENT[0])} type="basic" />
      </ContentContainer>

      <Year>
        <img src="/assets/Content/year.png" />
      </Year>

      <DoItTodo />

      <DoItInfo />

      <MainImg />

      <EnterDoIt onClick={handleLoginClick} />
    </>
  );
};

export default BeforePageTemplate;
