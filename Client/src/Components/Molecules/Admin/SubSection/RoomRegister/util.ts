import { API } from "@API/.";
import { postReservationAccept, postReservationDeny } from "@API/Reservation";

export const getContainer = ({ target }: { target: any }) =>
  target.closest("#reservationContainer");

export const getIdx = ({ target }: { target: any }) =>
  target.getAttribute("data-idx");

export const getAPI = ({ type }: { type: string }) => {
  type === "accept" ? postReservationAccept : postReservationDeny;
};

export const reserveUpdate = async ({
  target,
  type,
}: {
  target: any;
  type: string;
}) => {
  const data = getIdx({ target: getContainer({ target }) });
  const api = getAPI({ type });
  const res = await API({ api, data });
  if (!res) {
    alert("관리자에게 문의해주세요");
    return [];
  }
  return res;
};
