import { getClubUsersInfoSelector } from "@Recoil/Admin";
import { UserInfoData } from "@Type/Member";
import { useRecoilValue } from "recoil";

import MemberInfos from "./MemberInfos";

const MemberContainer = () => {
  const usersInfo = useRecoilValue<UserInfoData[]>(getClubUsersInfoSelector);
  return <MemberInfos usersInfo={usersInfo} />;
};

export default MemberContainer;
