import Header from "@Organisms/Common/Header";
import Footer from "@Organisms/Common/Footer";
import { ButtonContainer, GridContainer } from "./style";
import { MAIN_BOARD_PREVIEW_LIST } from "@Constant/.";
import BoardContent from "@Organisms/Main/BoardContent";
import Button from "@Atoms/Button";
import { SmallButtonType } from "@Style/.";
import { CircleJoin } from "./util";

const MainPageTemplate = () => {
  const handleCircleClick = () => CircleJoin();
  return (
    <>
      <Header />
      <ButtonContainer>
        <Button
          {...SmallButtonType}
          borderColor="#707070"
          onClick={handleCircleClick}
          title="동아리 신청"
        />
      </ButtonContainer>
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
