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
      const data = await API({
        api: getReservationRoom,
        data: `/${year}/${month}`,
      });
      console.log(data);
      return data;
    },
});
