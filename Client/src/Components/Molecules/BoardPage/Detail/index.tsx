import {
  DetailDate,
  DetailInfoContainer,
  DetailText,
  DetailTitle,
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
        <div>조회수 : {visitor} </div>
      </DetailInfoContainer>
      <DetailText>{text}</DetailText>
    </>
  );
};

export default BoardPageDetail;
