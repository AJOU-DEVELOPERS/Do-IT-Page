import { API } from "@API/.";
import { postCircleJoin } from "@API/Account";

export const CircleJoin = async () => {
  const { message } = await API({ api: postCircleJoin });
  message ? alert("동아리 신청이 완료되었습니다.") : alert("동아리 신청 실패");
};
