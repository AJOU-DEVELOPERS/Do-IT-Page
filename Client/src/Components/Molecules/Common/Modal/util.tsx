import { API } from "@API/.";
import { postStudyApply } from "@API/Study";

export const studyApply = async ({ studyIdx }: { studyIdx: number }) => {
  const { message } = await API({ api: postStudyApply, data: studyIdx });
  message ? alert("신청 성공") : alert("신청 실패");
};
