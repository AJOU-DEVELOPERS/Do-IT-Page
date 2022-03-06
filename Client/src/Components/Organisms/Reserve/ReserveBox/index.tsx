import { API } from "@API/.";
import { postReservationRoom } from "@API/Reservation";
import Button from "@Atoms/Button";
import { ReserveBoxHeader, ReserveInputForm } from "@Molecules/ReserveForm";
import { ReserveBoxText } from "@Molecules/ReserveForm/style";
import { userInfoAtom } from "@Recoil/CheckLogin";
import { LoginButtonType } from "@Style/.";
import { userInfo } from "@Type/Account";
import { checkTablet } from "@Util/.";
import { Dispatch, SetStateAction, useRef } from "react";
import { useRecoilValue } from "recoil";
import {
  ButtonContainer,
  ReserveBoxContainer,
  ReserveBoxTextContainer,
} from "./styles";
import { makeReservationRoomType, reservationClick } from "./util";

const ReserveBox = ({
  setBoxOpen,
}: {
  setBoxOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const startDateRef = useRef<HTMLInputElement | null>(null);
  const endDateRef = useRef<HTMLInputElement | null>(null);
  const startTimeRef = useRef<HTMLInputElement | null>(null);
  const endTimeRef = useRef<HTMLInputElement | null>(null);
  const { userIdx } = useRecoilValue(userInfoAtom) as userInfo;

  const handleCreateClick = async () => {
    const res = await reservationClick({
      startDateRef,
      endDateRef,
      startTimeRef,
      endTimeRef,
      userIdx,
    });
    if (!res) return;
    if (!checkTablet()) return;
    setBoxOpen(false);
  };
  return (
    <ReserveBoxContainer>
      <ReserveBoxHeader />
      <ReserveBoxTextContainer>
        <ReserveBoxText>날짜</ReserveBoxText>
      </ReserveBoxTextContainer>
      <ReserveInputForm
        sDateRef={startDateRef}
        eDateRef={endDateRef}
        sTimeRef={startTimeRef}
        eTimeRef={endTimeRef}
      />
      <ButtonContainer>
        <Button
          title="신청하기"
          {...LoginButtonType}
          onClick={handleCreateClick}
        />
      </ButtonContainer>
    </ReserveBoxContainer>
  );
};

export default ReserveBox;
