import { API } from "@API/.";
import { postReservationRoom } from "@API/Reservation";
import { postReservationRoomBodyProps, ReservationRoomData } from "@Type/API";
import React from "react";

export const makeReservationRoomType = ({
  reservationStartDate,
  reservationStartHour,
  reservationEndDate,
  reservationEndHour,
  userIdx,
}: ReservationRoomData): postReservationRoomBodyProps => {
  return {
    reservationStartDate,
    reservationStartHour,
    reservationEndDate,
    reservationEndHour,
    userIdx,
  };
};

export const reservationClick = async ({
  startDateRef,
  endDateRef,
  startTimeRef,
  endTimeRef,
  userIdx,
}: {
  startDateRef: React.RefObject<HTMLInputElement>;
  endDateRef: React.RefObject<HTMLInputElement>;
  startTimeRef: React.RefObject<HTMLInputElement>;
  endTimeRef: React.RefObject<HTMLInputElement>;
  userIdx: number;
}) => {
  if (
    !startDateRef?.current ||
    !endDateRef?.current ||
    !startTimeRef?.current ||
    !endTimeRef?.current
  )
    return;
  const {
    current: { value: sDValue },
  } = startDateRef;
  if (!sDValue) {
    alert("시작 날짜 입력해주세요");
    return;
  }
  const {
    current: { value: eDValue },
  } = endDateRef;
  if (!eDValue) {
    alert("종료 날짜 입력해주세요");
    return;
  }
  const {
    current: { value: sTValue },
  } = startTimeRef;
  if (!sTValue) {
    alert("시작 시간 입력해주세요");
    return;
  }
  const {
    current: { value: eTValue },
  } = endTimeRef;
  if (!eTValue) {
    alert("종료 시간 입력해주세요");
    return;
  }
  const body = makeReservationRoomType({
    reservationStartDate: "20" + sDValue,
    reservationEndDate: "20" + eDValue,
    reservationStartHour: sTValue + ":00",
    reservationEndHour: eTValue + ":00",
    userIdx: Number(userIdx),
  });

  const { message } = await API({ api: postReservationRoom, data: body });
  message ? alert("과방 대여 신청되었습니다.") : alert("실패");
  return message;
};
