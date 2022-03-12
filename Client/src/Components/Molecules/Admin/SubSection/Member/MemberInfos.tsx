import MemberInfo from "@Molecules/Admin/MemberInfo";
import MemberDetail from "@Molecules/Admin/MemberInfo/detail";
import Modal from "@Molecules/Common/Modal";
import { UserInfoData } from "@Type/Member";
import { getDateFromUTC } from "@Util/.";
import { ReactChild, useState } from "react";
import MemberInfoHeader from "./header";
import { Container, InfoContainer } from "./styles";

const MemberInfos = ({ usersInfo, children }: { usersInfo: UserInfoData[]; children?: ReactChild }) => {
  const [idx, setIdx] = useState<number>(0);

  const handleModalClose = (e: React.MouseEvent<HTMLElement>) => setIdx(0);

  const handleDetailMove = (e: React.MouseEvent<HTMLElement>) => {
    const target = (e.target as HTMLElement).closest("#MemberInfo");
    const userIdx = target?.getAttribute("data-idx");
    setIdx(Number(userIdx));
  };

  return (
    <>
      <Container>
        <MemberInfoHeader />
        {usersInfo.map(({ name, id, studentId, createdAt, userIdx }: UserInfoData) => (
          <InfoContainer id="MemberInfo" data-idx={userIdx} onClick={handleDetailMove} key={`${name}/${id}/${studentId}`}>
            <MemberInfo name={name} userId={id} studentId={studentId} createdAt={getDateFromUTC(createdAt)} />
          </InfoContainer>
        ))}
      </Container>
      {idx !== 0 && (
        <Modal onClick={handleModalClose}>
          <MemberDetail idx={idx} />
          {children && children}
        </Modal>
      )}
    </>
  );
};

export default MemberInfos;
