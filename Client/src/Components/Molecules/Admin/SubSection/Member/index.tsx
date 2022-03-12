import MemberInfo from "@Molecules/Admin/MemberInfo";
import { getUsersInfoSelector } from "@Recoil/Admin";
import { UserInfoData } from "@Type/API";
import { getDateFromUTC } from "@Util/.";
import { useRecoilValue } from "recoil";
import MemberInfoHeader from "./header";
import { Container, InfoContainer } from "./styles";

const MemberContainer = () => {
  const usersInfo = useRecoilValue<UserInfoData[]>(getUsersInfoSelector);

  const handleDetailMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement).closest("#MemberInfo");
    const userIdx = target?.getAttribute("data-idx");
    console.log(userIdx);
  };
  return (
    <Container>
      <MemberInfoHeader />
      {usersInfo.map(
        ({ name, id, studentId, createdAt, userIdx }: UserInfoData) => (
          <InfoContainer
            id="MemberInfo"
            data-idx={userIdx}
            onClick={handleDetailMove}
          >
            <MemberInfo
              name={name}
              userId={id}
              studentId={studentId}
              createdAt={getDateFromUTC(createdAt)}
            />
          </InfoContainer>
        )
      )}
    </Container>
  );
};

export default MemberContainer;
