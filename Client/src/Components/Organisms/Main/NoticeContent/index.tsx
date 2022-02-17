import { useRecoilValue } from "recoil";

import BoardPreview from "@Molecules/BoardPreview";
import ContentTitle from "@Molecules/BoardTitle";
import { noticeContentSelector } from "@Recoil/NoticeContent";

import { ContenTitleContainer, ContentContainer } from "./style";
import { BoardContentType } from "@src/Common/Type";

const NoticeContent = () => {
  const noticeContents = useRecoilValue<BoardContentType[]>(
    noticeContentSelector
  );

  const handleMoreInfoClick = () => {};
  return (
    <>
      <ContenTitleContainer>
        <ContentTitle boardName="공지사항" />
      </ContenTitleContainer>
      <ContentContainer>
        {noticeContents.slice(0, 4).map(({ title, date }, idx) => (
          <BoardPreview
            type="card"
            title={title}
            date={date}
            key={`${title + date} ${idx}`}
          />
        ))}
      </ContentContainer>
    </>
  );
};
export default NoticeContent;
