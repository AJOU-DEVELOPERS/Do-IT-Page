import MemberInfo from "@Molecules/Admin/MemberInfo";
import Modal from "@Molecules/Common/Modal";
import { getUsersInfoSelector } from "@Recoil/Admin";
import { UserInfoData } from "@Type/API";
import { getDateFromUTC } from "@Util/.";
import { useRecoilValue } from "recoil";
import MemberInfoHeader from "./header";
import MemberDetail from "@Molecules/Admin/MemberInfo/detail";
import { Container, InfoContainer } from "./styles";
import React, { useState } from "react";

const MemberContainer = () => {
  const usersInfo = useRecoilValue<UserInfoData[]>(getUsersInfoSelector);
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
      {idx !== 0 && (
        <Modal onClick={handleModalClose}>
          <MemberDetail idx={idx} />
        </Modal>
      )}
    </>
  );
};

export default MemberContainer;
