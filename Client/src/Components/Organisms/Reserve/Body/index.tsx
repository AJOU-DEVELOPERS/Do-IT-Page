import Button from "@Atoms/Button";
import { TitleContainer } from "@Organisms/BoardBody/styles";
import { LoginButtonType } from "@Style/.";
import { checkTablet } from "@Util/.";
import ReserveBox from "../ReserveBox";
import ReserveCalendar from "../ReserveCalendar";
import {
  ReserveBodyContainer,
  ReserveCalendarContainer,
  ReserveBoxContainer,
  ToggleButtonContainer,
} from "./styles";

const ReserveBody = () => {
  return (
    <>
      <TitleContainer>과방 대여</TitleContainer>
      <ReserveBodyContainer>
        <ReserveCalendarContainer>
          <ReserveCalendar />
          {checkTablet() && (
            <ToggleButtonContainer>
              <Button {...LoginButtonType} title="신청하기" />
            </ToggleButtonContainer>
          )}
        </ReserveCalendarContainer>
        {!checkTablet() && (
          <ReserveBoxContainer>
            <ReserveBox />
          </ReserveBoxContainer>
        )}
      </ReserveBodyContainer>
    </>
  );
};

export default ReserveBody;
