import Header from "@Organisms/Common/Header";
import Footer from "@Organisms/Common/Footer";
import { GridContainer } from "./style";
import { MAIN_BOARD_PREVIEW_LIST } from "@Constant/.";
import BoardContent from "@Organisms/Main/BoardContent";

const MainPageTemplate = () => {
  return (
    <>
      <Header />
      <GridContainer>
        {MAIN_BOARD_PREVIEW_LIST.map((boardName: string, idx: number) => (
          <BoardContent boardName={boardName} key={`${boardName}/${idx}`} />
        ))}
      </GridContainer>
      <Footer />
    </>
  );
};

export default MainPageTemplate;
