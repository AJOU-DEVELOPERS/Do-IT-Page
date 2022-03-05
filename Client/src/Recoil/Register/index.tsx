import { selector } from "recoil";
import { API } from "@API/.";
import { getDepartment } from "@API/Account";

export const getDepartmentsSelector = selector({
  key: "getDepartmentsSelector",
  get: async () => {
    const { message, departments } = await API({ api: getDepartment });
    if (message) return departments;
    return [];
  },
});
