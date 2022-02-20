import Input from "@Atoms/Input";
import { ReserveInput } from "@Atoms/Input/styles";
import {
  DateContainer,
  ReserveBoxContainer,
  ReserveBoxSmallText,
  ReserveBoxText,
  ReserveBoxTitle,
  ReservorContainer,
  SpliteTimeSpan,
  TimerContainer,
} from "./styles";

const ReserveBox = () => {
  return (
    <ReserveBoxContainer>
      <ReserveBoxTitle>신청하기</ReserveBoxTitle>

      <ReservorContainer>
        <ReserveBoxText>대표자</ReserveBoxText>
        <ReserveInput width="190px" height="40px" />
      </ReservorContainer>

      <ReserveBoxText>날짜</ReserveBoxText>

      <DateContainer>
        <span>
          <ReserveBoxSmallText>시작</ReserveBoxSmallText>
          <ReserveInput width="163px" height="37px" />
        </span>
        <span>
          <ReserveBoxSmallText>종료</ReserveBoxSmallText>
          <ReserveInput width="163px" height="37px" />
        </span>
      </DateContainer>

      <TimerContainer>
        <ReserveBoxSmallText>시간</ReserveBoxSmallText>
        <ReserveInput width="163px" height="37px" />
        <SpliteTimeSpan>-</SpliteTimeSpan>
        <ReserveInput width="163px" height="37px" />
      </TimerContainer>

      <div>신청하기</div>
    </ReserveBoxContainer>
  );
};

export default ReserveBox;
