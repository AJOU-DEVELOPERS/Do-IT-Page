import { getClubRegisterUsersSelector } from "@Recoil/Admin";
import { UserInfoData } from "@Type/Member";
import { useRecoilValue } from "recoil";
import MemberInfos from "../Member/MemberInfos";
import { AcceptButton, ButtonContainer, DenyButton } from "./style";

const MemberRegisterContainer = () => {
  const usersInfo = useRecoilValue<UserInfoData[]>(getClubRegisterUsersSelector);
  return (
    <MemberInfos usersInfo={usersInfo}>
      <ButtonContainer>
        <AcceptButton>승인</AcceptButton>
        <DenyButton>거절</DenyButton>
      </ButtonContainer>
    </MemberInfos>
  );
};

export default MemberRegisterContainer;
