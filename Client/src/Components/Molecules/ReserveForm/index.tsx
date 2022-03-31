import { ReserveInput } from "@Atoms/Input/styles";
import {
  DateContainer,
  InputDataContainer,
  ReserveBoxSmallText,
  ReserveBoxTitle,
  ReserveSmallInputType,
  SpliteTimeSpan,
  TimerContainer,
  SpiltTimeSpanMobile,
  SplitTimeSpanContainer,
} from "./style";

export const ReserveBoxHeader = () => (
  <ReserveBoxTitle>신청하기</ReserveBoxTitle>
);
export const ReserveInputForm = ({
  sDateRef,
  eDateRef,
  sTimeRef,
  eTimeRef,
}: {
  sDateRef: React.RefObject<HTMLInputElement> | undefined;
  eDateRef: React.RefObject<HTMLInputElement> | undefined;
  sTimeRef: React.RefObject<HTMLInputElement> | undefined;
  eTimeRef: React.RefObject<HTMLInputElement> | undefined;
}) => {
  return (
    <InputDataContainer>
      <DateContainer>
        <span>
          <ReserveBoxSmallText>시작</ReserveBoxSmallText>
          <ReserveInput
            {...ReserveSmallInputType}
            ref={sDateRef}
            placeholder="21-02-01"
            type="text"
          />
        </span>
        <span>
          <ReserveBoxSmallText>종료</ReserveBoxSmallText>
          <ReserveInput
            {...ReserveSmallInputType}
            ref={eDateRef}
            placeholder="21-02-01"
            type="text"
          />
        </span>
      </DateContainer>

      <TimerContainer>
        <span>
          <ReserveBoxSmallText>시간</ReserveBoxSmallText>
          <ReserveInput
            {...ReserveSmallInputType}
            ref={sTimeRef}
            placeholder="19:30"
            type="text"
          />
        </span>
        <SpliteTimeSpan>-</SpliteTimeSpan>
        <SplitTimeSpanContainer>
          <SpiltTimeSpanMobile>~</SpiltTimeSpanMobile>
          <ReserveInput
            {...ReserveSmallInputType}
            ref={eTimeRef}
            placeholder="21:00"
            type="text"
          />
        </SplitTimeSpanContainer>
      </TimerContainer>
    </InputDataContainer>
  );
};
