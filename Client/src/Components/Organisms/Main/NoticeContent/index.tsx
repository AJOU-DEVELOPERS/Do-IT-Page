import { useRecoilValue } from "recoil";

import BoardPreview from "@Molecules/BoardPreview";
import ContentTitle from "@Molecules/ContentTitle";
import { noticeContentSelector } from "@Recoil/NoticeContent";

import { ContenTitleContainer, ContentContainer } from "./style";
import { BoardContentType } from "@src/Common/Type";

const NoticeContent = () => {
  const noticeContents = useRecoilValue<BoardContentType[]>(
    noticeContentSelector
  );
  return (
    <>
      <ContenTitleContainer>
        <ContentTitle title="공지사항" />
      </ContenTitleContainer>
      <ContentContainer>
        {noticeContents.slice(0, 4).map(({ title, date }) => (
          <BoardPreview type="card" title={title} date={date} />
        ))}
      </ContentContainer>
    </>
  );
};
export default NoticeContent;
