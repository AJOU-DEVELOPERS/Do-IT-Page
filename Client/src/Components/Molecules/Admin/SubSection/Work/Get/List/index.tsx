import {
  Table,
  TableHead,
  TableRow,
  TableTitle,
  TableBody,
} from "@Atoms/Table/styles";
import { Dispatch } from "react";
import { WorkType } from "../../type";
import { workClick } from "../../util";

const WorkList = ({
  workList,
  setWork,
  type,
}: {
  workList: WorkType[];
  setWork: Dispatch<WorkType>;
  type: string | undefined;
}) => {
  const handleWorkClick = async ({ currentTarget }: { currentTarget: any }) => {
    const res = await workClick({ currentTarget, type });
    setWork(res[0]);
  };
  return (
    <Table>
      <TableHead>
        <TableRow>
          {PROJECT_TITLE.map((item) => (
            <TableTitle key={item.key}>{item.title}</TableTitle>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {workList.map((item: WorkType) => (
          <TableRow
            key={item.studyIdx}
            onClick={handleWorkClick}
            data-idx={item.studyIdx}
          >
            {PROJECT_TITLE.map((title) => (
              <TableTitle key={title.key}>{item[title.key]}</TableTitle>
            ))}
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
