import { getUserInfoSelector } from "@Recoil/Admin";
import { UserInfoData } from "@Type/API";
import { getDateFromUTC } from "@Util/.";
import { useRecoilValue } from "recoil";
import { DetailContainer, DetailContent, DetailTitle, Wrapper } from "./style";
import { DetailProps } from "./type";

const MemberDetail = ({ idx }: { idx: number }) => {
  const [userInfo] = useRecoilValue<UserInfoData[]>(getUserInfoSelector(idx));
  const {
    name,
    id: userId,
    studentId,
    createdAt,
    phoneNumber,
    email,
  } = userInfo;

  return (
    <DetailContainer>
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
