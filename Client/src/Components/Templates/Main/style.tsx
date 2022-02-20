import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  width: 80vw;
  height: 300vh;
  margin: 5vh auto;
  grid-template:
    "스터디 공지사항 공지사항" 1fr
    "자유게시판 백준랭킹 프로젝트" 1fr
    "사진첩 사진첩 사진첩" 1.2fr
    "과방대여 과방대여 과방대여" 110vh
    /1fr 1fr 1fr;
  gap: 1vw;
`;
