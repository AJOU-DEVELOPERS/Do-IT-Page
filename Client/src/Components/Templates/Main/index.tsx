import { useCallback } from "react";

import Header from "@Organisms/Header";
import DoItCarousel from "@Organisms/Before/DoItCarousel";
import NoticeContent from "@Organisms/Main/NoticeContent";
import { BOARD_INFOS } from "@Constant/.";
import BoardContent from "@Organisms/Main/BoardContent";
import RainkingContent from "@Organisms/Main/RankingContent";
import PhotoContent from "@Organisms/Main/PhotoContent";

import { BoardsContainer, CalendarContainer } from "./style";
import Calendar from "@Organisms/Calendar";
import Footer from "@Organisms/Footer";

const MainPageTemplate = () => {
  const handleUserIconClick = useCallback(() => {
    console.log("click userIcon");
  }, []);

  return (
    <>
      <Header onClick={handleUserIconClick}></Header>
      <DoItCarousel />
      <NoticeContent />
      <BoardsContainer>
        {BOARD_INFOS.map(({ boardType, apiSrc }, idx) => (
          <BoardContent
            boardType={boardType}
            apiSrc={apiSrc}
            key={`${boardType} ${idx}`}
          />
        ))}
      </BoardsContainer>
      <RainkingContent />
      <PhotoContent />
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
      <Footer />
    </>
  );
};

export default MainPageTemplate;
