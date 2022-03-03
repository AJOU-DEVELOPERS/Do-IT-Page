import { API } from "@API/.";
import { postReservationRoom } from "@API/Reservation";
import Button from "@Atoms/Button";
import {
  ReserveBoxHeader,
  ReserveBoxName,
  ReserveInputForm,
} from "@Molecules/ReserveForm";
import { ReserveBoxText } from "@Molecules/ReserveForm/style";
import { LoginButtonType } from "@Style/.";
import { checkTablet } from "@Util/.";
import { Dispatch, SetStateAction, useRef } from "react";
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
  const userNameRef = useRef<HTMLInputElement | null>(null);
  const startDateRef = useRef<HTMLInputElement | null>(null);
  const endDateRef = useRef<HTMLInputElement | null>(null);
  const startTimeRef = useRef<HTMLInputElement | null>(null);
  const endTimeRef = useRef<HTMLInputElement | null>(null);

  const handleCreateClick = async () => {
    if (
      !userNameRef?.current ||
      !startDateRef?.current ||
      !endDateRef?.current ||
      !startTimeRef?.current ||
      !endTimeRef?.current
    )
      return;

    const body = makeReservationRoomType({
      reservationStartDate: "20" + startDateRef.current.value,
      reservationStartHour: "20" + endDateRef.current.value,
      reservationEndDate: startTimeRef.current.value + ":00",
      reservationEndHour: endTimeRef.current.value + ":00",
      userName: userNameRef.current.value,
    });

    const res = await API({ api: postReservationRoom, data: body });

    // if (!res) alert("error");
    if (!checkTablet()) return;
    setBoxOpen(false);
  };
  return (
    <ReserveBoxContainer>
      <ReserveBoxHeader />
      <ReserveBoxName nameRef={userNameRef} />
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
