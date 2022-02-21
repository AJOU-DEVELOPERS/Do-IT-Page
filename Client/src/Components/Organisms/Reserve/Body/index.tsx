import Button from "@Atoms/Button";
import { TitleContainer } from "@Organisms/BoardBody/styles";
import { LoginButtonType } from "@Style/.";
import { checkTablet } from "@Util/.";
import { useEffect, useRef, useState } from "react";
import ReserveBox from "../ReserveBox";
import ReserveCalendar from "../ReserveCalendar";
import {
  ReserveBodyContainer,
  ReserveCalendarContainer,
  ReserveBoxContainer,
  ToggleButtonContainer,
} from "./styles";

const ReserveBody = () => {
  const [boxOpen, setBoxOpen] = useState(!checkTablet());
  const handleToggleClick = (e: any) => {
    e.stopPropagation();
    setBoxOpen(true);
  };
  const boxRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const CloseModal = (e: any) => {
    const target = e.target.closest("#ref");
    if (
      e.target === buttonRef.current ||
      e.target === boxRef.current ||
      boxRef.current === target
    )
      return;

    setBoxOpen(false);
  };
  useEffect(() => {
    if (!checkTablet()) return;
    window.addEventListener("click", CloseModal);
    return () => {
      window.removeEventListener("click", CloseModal);
    };
  }, []);
  return (
    <>
      <TitleContainer>과방 대여</TitleContainer>
      <ReserveBodyContainer>
        <ReserveCalendarContainer>
          <ReserveCalendar />
          {!boxOpen && (
            <ToggleButtonContainer>
              <Button
                {...LoginButtonType}
                title="신청하기"
                onClickCapture={handleToggleClick}
                buttonRef={buttonRef}
              />
            </ToggleButtonContainer>
          )}
        </ReserveCalendarContainer>
        {boxOpen && (
          <ReserveBoxContainer ref={boxRef} id="ref">
            <ReserveBox setBoxOpen={setBoxOpen} />
          </ReserveBoxContainer>
        )}
      </ReserveBodyContainer>
    </>
  );
};

export default ReserveBody;
