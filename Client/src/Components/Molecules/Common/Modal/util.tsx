import { API } from "@API/.";
import { postProjectApply } from "@API/Project";
import { postStudyApply } from "@API/Study";

export const studyApply = async (props: {
  studyIdx: number | undefined;
  userIdx: number;
}) => {
  const { message } = await API({ api: postStudyApply, data: props });
  alert(message ?? "신청 실패");
};
export const projectApply = async (props: {
  projectIdx: number;
  userIdx: number;
}) => {
  const { message } = await API({ api: postProjectApply, data: props });
  alert(message ?? "신청 실패");
};
