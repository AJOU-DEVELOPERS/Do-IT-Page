import { API } from "@API/.";
import { getReservationRoom } from "@API/Reservation";
import { postReservationRoomBodyProps } from "@Type/API";
import { ReservationRecoilProps } from "@Type/Reservation";
import { selectorFamily } from "recoil";

export const reservationRoomSelector = selectorFamily<
  postReservationRoomBodyProps[],
  {
    year: number;
    month: number;
  }
>({
  key: "reservationRoomSelector",
  get:
    ({ year, month }: ReservationRecoilProps) =>
    async () => {
      const { message, res } = await API({
        api: getReservationRoom,
        data: `/${year}/${month}`,
      });
      return message ? res : [];
    },
});

export const getReservationAcceptSelector = selectorFamily<
  postReservationRoomBodyProps[],
  {
    year: number;
    month: number;
  }
>({
  key: "getReservationAcceptSelector",
  get:
    ({ year, month }: ReservationRecoilProps) =>
    async ({ get }) => {
      const list = get(reservationRoomSelector({ year, month }));
      return list?.filter((item) => item.status === "accepted");
    },
});

// 관리자페이지에서 보일거
export const getReservationProcessingSelector = selectorFamily<
  postReservationRoomBodyProps[],
  {
    year: number;
    month: number;
  }
>({
  key: "getReservationProcessingSelector",
  get:
    ({ year, month }: ReservationRecoilProps) =>
    async ({ get }) => {
      const list = get(reservationRoomSelector({ year, month }));
      return list?.filter((item) => item.status === "processing");
    },
});
