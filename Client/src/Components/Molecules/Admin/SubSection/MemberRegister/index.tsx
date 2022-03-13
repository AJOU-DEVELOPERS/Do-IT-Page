import { acceptClubUser, denyClubUser } from "@API/Admin";
import { getClubRegisterUsersSelector, userModalState } from "@Recoil/Admin";
import { UserInfoData } from "@Type/Member";
import { useRecoilRefresher_UNSTABLE, useRecoilValue, useResetRecoilState } from "recoil";
import MemberInfos from "../Member/MemberInfos";
import { AcceptButton, ButtonContainer, DenyButton } from "./style";

const MemberRegisterContainer = () => {
  const usersInfo = useRecoilValue<UserInfoData[]>(getClubRegisterUsersSelector);
  const refreshUserInfo = useRecoilRefresher_UNSTABLE(getClubRegisterUsersSelector);
  const resetUserModalState = useResetRecoilState(userModalState);

  const handleAccept = async (e: React.MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement).closest("#DetailButtonCont")?.previousElementSibling;
    const clubIdx = Number(target?.getAttribute("data-club-idx"));
    await acceptClubUser(clubIdx);
    refreshUserInfo();
    resetUserModalState();
  };

  const handleDeny = async (e: React.MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement).closest("#DetailButtonCont")?.previousElementSibling;
    const clubIdx = Number(target?.getAttribute("data-club-idx"));
    await denyClubUser(clubIdx);
    refreshUserInfo();
    resetUserModalState();
  };

  return (
    <MemberInfos usersInfo={usersInfo}>
      <ButtonContainer id="DetailButtonCont">
        <AcceptButton onClick={handleAccept}>승인</AcceptButton>
        <DenyButton onClick={handleDeny}>거절</DenyButton>
      </ButtonContainer>
    </MemberInfos>
  );
};

export default MemberRegisterContainer;
