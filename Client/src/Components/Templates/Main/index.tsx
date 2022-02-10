import { useCallback } from "react";

import Header from "@Organisms/Header";
import FirstContent from "@Organisms/Page/FirstContent";
import NoticeContent from "@Organisms/Main/NoticeContent";

const MainPageTemplate = () => {
  const handleUserIconClick = useCallback(() => {
    console.log("click userIcon");
  }, []);

  return (
    <>
      <Header onClick={handleUserIconClick}></Header>
      <FirstContent />
      <NoticeContent />
    </>
  );
};

export default MainPageTemplate;
