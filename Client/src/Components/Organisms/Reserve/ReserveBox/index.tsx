import { API } from "@API/.";
import { postReservationRoom } from "@API/Reservation";
import Button from "@Atoms/Button";
import { ReserveBoxHeader, ReserveInputForm } from "@Molecules/ReserveForm";
import { ReserveBoxText } from "@Molecules/ReserveForm/style";
import { userInfoAtom } from "@Recoil/CheckLogin";
import { LoginButtonType } from "@Style/.";
import { checkTablet } from "@Util/.";
import { Dispatch, SetStateAction, useRef } from "react";
import { useRecoilValue } from "recoil";
import {
  ButtonContainer,
  ReserveBoxContainer,
  ReserveBoxTextContainer,
} from "./styles";
import { makeReservationRoomType } from "./util";

const ReserveBox = ({
  setBoxOpen,
}: {
  setBoxOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const startDateRef = useRef<HTMLInputElement | null>(null);
  const endDateRef = useRef<HTMLInputElement | null>(null);
  const startTimeRef = useRef<HTMLInputElement | null>(null);
  const endTimeRef = useRef<HTMLInputElement | null>(null);
  const { userId } = useRecoilValue(userInfoAtom);

  const handleCreateClick = async () => {
    if (
      !startDateRef?.current ||
      !endDateRef?.current ||
      !startTimeRef?.current ||
      !endTimeRef?.current
    )
      return;

    const body = makeReservationRoomType({
      reservationStartDate: "20" + startDateRef.current.value,
      reservationEndDate: "20" + endDateRef.current.value,
      reservationStartHour: startTimeRef.current.value + ":00",
      reservationEndHour: endTimeRef.current.value + ":00",
      userIdx: Number(userId),
    });

    const res = await API({ api: postReservationRoom, data: body });
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
