import {
  Table,
  TableHead,
  TableRow,
  TableTitle,
  TableBody,
} from "@Atoms/Table/styles";
import { Dispatch, useMemo } from "react";
import { WorkType } from "../../type";
import {
  checkWaiting,
  createWorkAccept,
  createWorkDeny,
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
  const dataType = useMemo(() => checkWaiting({ search }), [search]);

  const handleWorkClick = async ({ currentTarget }: { currentTarget: any }) => {
    const res = await workClick({ currentTarget, type });
    setWork(res[0]);
  };
  const handleCreateAccept = async ({ target }: { target: any }) =>
    createWorkAccept({ target, type });
  const handleCreateDeny = async ({ target }: { target: any }) =>
    createWorkDeny({ target, type });

  return (
    <Table>
      <TableHead>
        <TableRow>
          {PROJECT_TITLE.map((item) => (
            <TableTitle key={item.key}>{item.title}</TableTitle>
          ))}
          {dataType && <TableTitle>승인</TableTitle>}
          {dataType && <TableTitle>거부</TableTitle>}
        </TableRow>
      </TableHead>
      <TableBody>
        {workList.map((item: WorkType) => (
          <TableRow
            key={item.studyIdx ?? item.projectIdx}
            onClick={handleWorkClick}
            data-idx={item.studyIdx ?? item.projectIdx}
            id={dataType ? "waitContainer" : "container"}
          >
            {PROJECT_TITLE.map((title) => (
              <TableTitle key={title.key}>{item[title.key]}</TableTitle>
            ))}
            {dataType && (
              <TableTitle onClick={handleCreateAccept}>승인</TableTitle>
            )}
            {dataType && (
              <TableTitle onClick={handleCreateDeny}>거부</TableTitle>
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
