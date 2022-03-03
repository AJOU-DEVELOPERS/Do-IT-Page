import { selector } from "recoil";
import { API } from "@API/.";
import { getDepartment } from "@API/Account";

export const getDepartmentsSelector = selector({
  key: "getDepartmentsSelector",
  get: async () => {
    const data = await API({ api: getDepartment });
    return data;
  },
});
