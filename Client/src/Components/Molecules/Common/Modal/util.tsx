import { API } from "@API/.";
import { postStudyApply } from "@API/Study";

export const studyApply = async ({ studyIdx }: { studyIdx: number }) => {
  const res = await API({ api: postStudyApply, data: studyIdx });
  console.log(res);
};
