import {
  DetailDate,
  DetailInfoContainer,
  DetailTitle,
  DetailVisitor,
} from "./styles";

interface BoardProps {
  title: string;
  date: string;
  visitor: number;
  text: string;
}
const BoardPageDetail = ({ title, date, visitor, text }: BoardProps) => {
  return (
    <>
      <DetailTitle>제목 : {title}</DetailTitle>
      <DetailInfoContainer>
        <DetailDate>작성일 : {date}</DetailDate>
        <DetailVisitor>조회수 : {visitor} </DetailVisitor>
      </DetailInfoContainer>
      <div>{text}</div>
    </>
  );
};

export default BoardPageDetail;
