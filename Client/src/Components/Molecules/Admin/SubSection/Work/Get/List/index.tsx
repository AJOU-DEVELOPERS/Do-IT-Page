import {
  Table,
  TableHead,
  TableRow,
  TableTitle,
  TableBody,
} from "@Atoms/Table/styles";
import { refreshAPI } from "@Util/.";
import { Dispatch, useMemo } from "react";
import { useRecoilRefresher_UNSTABLE } from "recoil";
import { WorkType } from "../../type";
import {
  checkUpdate,
  checkWaiting,
  createWorkAccept,
  createWorkDeny,
  getWorkListType,
  updateWork,
  workClick,
} from "../../util";

const WorkList = ({
  workList,
  setWork,
  type,
  search,
}: {
  workList: WorkType[];
  setWork: Dispatch<WorkType>;
  type: string | undefined;
  search: string;
}) => {
  const refresh = useRecoilRefresher_UNSTABLE(getWorkListType({ type }));
  const handleRefresh = refreshAPI(refresh);
  const waiting = useMemo(() => checkWaiting({ search }), [search]);
  const checkStatus = useMemo(() => checkUpdate({ search }), [search]);

  const handleWorkClick = async ({ currentTarget }: { currentTarget: any }) => {
    const res = await workClick({ currentTarget, type });
    setWork(res[0]);
  };
  const handleCreateAccept = async (e: any) =>
    handleRefresh(() => createWorkAccept({ e, type }));
  const handleCreateDeny = async (e: any) =>
    handleRefresh(() => createWorkDeny({ e, type }));
  const handleUpdateStudy = async (e: any) =>
    handleRefresh(() => updateWork({ e, type }));

  return (
    <Table>
      <TableHead>
        <TableRow>
          {PROJECT_TITLE.map((item) => (
            <TableTitle key={item.key}>{item.title}</TableTitle>
          ))}
          {waiting && <TableTitle>승인</TableTitle>}
          {waiting && <TableTitle>거부</TableTitle>}
          {checkStatus && <TableTitle>상태 변경</TableTitle>}
        </TableRow>
      </TableHead>
      <TableBody>
        {workList.map((item: WorkType) => (
          <TableRow
            key={item.studyIdx ?? item.projectIdx}
            onClick={handleWorkClick}
            data-idx={item.studyIdx ?? item.projectIdx}
            id={waiting ? "waitContainer" : "container"}
          >
            {PROJECT_TITLE.map((title) => (
              <TableTitle key={title.key}>{item[title.key]}</TableTitle>
            ))}
            {waiting && (
              <TableTitle onClick={handleCreateAccept}>승인</TableTitle>
            )}
            {waiting && (
              <TableTitle onClick={handleCreateDeny}>거부</TableTitle>
            )}
            {checkStatus && (
              <TableTitle onClick={handleUpdateStudy}>변경</TableTitle>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WorkList;

export const PROJECT_TITLE = [
  {
    key: "name",
    title: "스터디 명",
  },
  {
    key: "description",
    title: "설명",
  },
  {
    key: "status",
    title: "상태",
  },
  {
    key: "leaderName",
    title: "스터디 장",
  },
];
