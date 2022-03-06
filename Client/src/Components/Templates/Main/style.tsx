import { MOBILE_WIDTH } from "@Constant/index";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  width: 80vw;
  height: 300vh;
  margin: 5vh auto;
  grid-template:
    "스터디 공지사항 공지사항" 1fr
    "자유게시판 백준랭킹 프로젝트" 1fr
    "사진첩 사진첩 사진첩" 1fr
    "과방대여 과방대여 과방대여" 1.2fr
    /1fr 1fr 1fr;
  gap: 1vw;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    grid-template:
      "공지사항" 1fr
      "자유게시판" 1fr
      "스터디" 1fr
      "프로젝트" 1fr
      "백준랭킹" 300px
      "사진첩" 300px
      "과방대여" 360px
      "마이페이지" 1fr
      /300px;
    gap: 5vw;
    margin: 2vh auto;
  }
`;

export const ButtonContainer = styled.div`
  width: 85%;
  height: 100px;
  display: flex;
  justify-content: end;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 95%;
  }
`;
