import { API } from "@API/.";
import { postProjectApply } from "@API/Project";
import { postStudyApply } from "@API/Study";

export const studyApply = async (props: {
  studyIdx: number | undefined;
  userIdx: number;
}) => {
  const { message } = await API({ api: postStudyApply, data: props });
  if (message === true) {
    alert("신청 완료되었습니다.");
    return;
  }
  alert(message ?? "신청 실패");
};
export const projectApply = async (props: {
  projectIdx: number;
  userIdx: number;
}) => {
  const { message } = await API({ api: postProjectApply, data: props });
  if (message === true) {
    alert("신청 완료되었습니다.");
    return;
  }
  alert(message ?? "신청 실패");
};
