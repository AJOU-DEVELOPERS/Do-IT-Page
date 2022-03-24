import React from "react";
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
  const splitText = text.split(".");
  splitText.length = splitText.length - 1;
  return (
    <>
      <DetailTitle>제목 : {title}</DetailTitle>
      <DetailInfoContainer>
        <DetailDate>작성일 : {date}</DetailDate>
        <div>조회수 : {visitor} </div>
      </DetailInfoContainer>
      <DetailText>
        {splitText.map((text, idx) => (
          <React.Fragment key={idx}>
            <div>
              {/* {text + `${(<img src="x" onError={alert(1)} alt="img" />)}`}. */}
              {text}.
            </div>
            <br />
          </React.Fragment>
        ))}
      </DetailText>
    </>
  );
};

export default React.memo(BoardPageDetail);
