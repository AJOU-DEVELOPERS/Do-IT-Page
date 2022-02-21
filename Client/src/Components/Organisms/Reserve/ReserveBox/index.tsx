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
import { ButtonContainer, ReserveBoxContainer } from "./styles";

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

  const handleCreateClick = () => {
    if (
      !userNameRef?.current ||
      !startDateRef?.current ||
      !endDateRef?.current ||
      !startTimeRef?.current ||
      !endTimeRef?.current
    )
      return;

    console.log(userNameRef.current.value);
    console.log(startDateRef.current.value);
    console.log(endDateRef.current.value);
    console.log(startTimeRef.current.value);
    console.log(endTimeRef.current.value);

    if (!checkTablet()) return;
    setBoxOpen(false);
  };
  return (
    <ReserveBoxContainer>
      <ReserveBoxHeader />
      <ReserveBoxName nameRef={userNameRef} />
      <ReserveBoxText>날짜</ReserveBoxText>
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
