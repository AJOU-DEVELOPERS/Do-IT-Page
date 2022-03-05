import { API } from "@API/.";
import { postCircleJoin } from "@API/Account";

export const CircleJoin = async () => {
  const res = await API({ api: postCircleJoin });
  console.log(res);
};
