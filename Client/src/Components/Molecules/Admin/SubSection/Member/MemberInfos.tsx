import MemberInfo from "@Molecules/Admin/MemberInfo";
import MemberDetail from "@Molecules/Admin/MemberInfo/detail";
import Modal from "@Molecules/Common/Modal";
import { userModalState } from "@Recoil/Admin";
import { UserInfoData, UserInfoProps } from "@Type/Member";
import { getDateFromUTC } from "@Util/.";
import { ReactChild, useState } from "react";
import { useRecoilState } from "recoil";
import MemberInfoHeader from "./header";
import { Container, InfoContainer } from "./styles";

const MemberInfos = ({ usersInfo, children }: { usersInfo: UserInfoData[]; children?: ReactChild }) => {
  const [{ idx, clubIdx }, setUserModalState] = useRecoilState<UserInfoProps>(userModalState);

  const handleModalClose = (e: React.MouseEvent<HTMLElement>) => setUserModalState({ idx: 0, clubIdx: 0 });

  const handleDetailMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement).closest("#MemberInfo");
    const _idx = Number(target?.getAttribute("data-idx"));
    const _clubIdx = Number(target?.getAttribute("data-club-idx"));
    setUserModalState({ idx: _idx, clubIdx: _clubIdx });
  };

  return (
    <>
      <Container>
        <MemberInfoHeader />
        {usersInfo.map(({ name, id, studentId, createdAt, userIdx, clubUserIdx }: UserInfoData) => (
          <InfoContainer id="MemberInfo" data-idx={userIdx} data-club-idx={clubUserIdx} onClick={handleDetailMove} key={`${name}/${id}/${studentId}`}>
            <MemberInfo name={name} userId={id} studentId={studentId} createdAt={getDateFromUTC(createdAt)} />
          </InfoContainer>
        ))}
      </Container>
      {idx !== 0 && (
        <Modal onClick={handleModalClose}>
          <MemberDetail idx={idx} clubIdx={clubIdx} />
          {children && children}
        </Modal>
      )}
    </>
  );
};

export default MemberInfos;
