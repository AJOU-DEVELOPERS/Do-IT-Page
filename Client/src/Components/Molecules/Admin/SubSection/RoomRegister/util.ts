import { API } from "@API/.";
import { postReservationAccept } from "@API/Reservation";

export const getContainer = ({ target }: { target: any }) =>
  target.closest("#reservationContainer");

export const getIdx = ({ target }: { target: any }) =>
  target.getAttribute("data-idx");

export const reserveAccept = async ({ target }: { target: any }) => {
  const data = getIdx({ target: getContainer({ target }) });
  const res = await API({ api: postReservationAccept, data });
  if (!res) {
    alert("관리자에게 문의해주세요");
    return [];
  }
  return res;
};
export const reserveDeny = async ({ target }: { target: any }) => {
  const data = getIdx({ target: getContainer({ target }) });
  const res = await API({ api: postReservationAccept, data });
  if (!res) {
    alert("관리자에게 문의해주세요");
    return [];
  }
  return res;
};
