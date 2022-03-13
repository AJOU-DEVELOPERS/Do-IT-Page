import { getUserInfoSelector } from "@Recoil/Admin";
import { UserInfoData, UserInfoProps } from "@Type/Member";

import { getDateFromUTC } from "@Util/.";
import { useRecoilValue } from "recoil";
import { DetailContainer, DetailContent, DetailTitle, Wrapper } from "./style";

const MemberDetail = ({ idx, clubIdx }: UserInfoProps) => {
  const [userInfo] = useRecoilValue<UserInfoData[]>(getUserInfoSelector(idx));
  const { name, id: userId, studentId, createdAt, phoneNumber, email } = userInfo;

  return (
    <DetailContainer id="MemberDetail" data-idx={idx} data-club-idx={clubIdx}>
      <Wrapper>
        <DetailTitle>이름</DetailTitle>
        <DetailContent>{name}</DetailContent>
      </Wrapper>
      <Wrapper>
        <DetailTitle>아이디</DetailTitle>
        <DetailContent>{userId}</DetailContent>
      </Wrapper>
      <Wrapper>
        <DetailTitle>학번</DetailTitle>
        <DetailContent> {studentId}</DetailContent>
      </Wrapper>
      <Wrapper>
        <DetailTitle>가입일</DetailTitle>
        <DetailContent> {getDateFromUTC(createdAt)}</DetailContent>
      </Wrapper>
      <Wrapper>
        <DetailTitle>연락처</DetailTitle>
        <DetailContent>{phoneNumber}</DetailContent>
      </Wrapper>
      <Wrapper>
        <DetailTitle>이메일</DetailTitle>
        <DetailContent>{email}</DetailContent>
      </Wrapper>
    </DetailContainer>
  );
};

export default MemberDetail;
