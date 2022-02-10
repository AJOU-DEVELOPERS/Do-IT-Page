import { useCallback } from "react";

import Header from "@Organisms/Header";
import FirstContent from "@Organisms/Page/FirstContent";
import NoticeContent from "@Organisms/Main/NoticeContent";
import { BOARD_INFOS } from "@Constant/.";
import BoardContent from "@Organisms/Main/BoardContent";
import { BoardsContainer } from "./style";
import RainkingContent from "@Organisms/Main/RankingContent";

const MainPageTemplate = () => {
  const handleUserIconClick = useCallback(() => {
    console.log("click userIcon");
  }, []);

  return (
    <>
      <Header onClick={handleUserIconClick}></Header>
      <FirstContent />
      <NoticeContent />
      <BoardsContainer>
        {BOARD_INFOS.map(({ boardType, apiSrc }) => (
          <BoardContent boardType={boardType} apiSrc={apiSrc} />
        ))}
      </BoardsContainer>
      <RainkingContent />
    </>
  );
};

export default MainPageTemplate;
