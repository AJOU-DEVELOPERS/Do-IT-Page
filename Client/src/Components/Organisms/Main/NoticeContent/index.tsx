import BoardPreview from "@Molecules/BoardPreview";
import ContentTitle from "@Molecules/ContentTitle";
import { noticeContentSelector } from "@Recoil/NoticeContent";
import { useRecoilValue } from "recoil";
import { ContenTitleContainer, ContentContainer } from "./style";

const NoticeContent = () => {
  const noticeContents = useRecoilValue(noticeContentSelector);
  return (
    <>
      <ContenTitleContainer>
        <ContentTitle title="공지사항" />
      </ContenTitleContainer>
      <ContentContainer>
        {noticeContents.map(({ title, date }) => (
          <BoardPreview type="card" title={title} date={date} />
        ))}
      </ContentContainer>
    </>
  );
};
export default NoticeContent;
