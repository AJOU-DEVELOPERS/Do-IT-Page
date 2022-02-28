import { API } from "@API/.";
import { getProjectData } from "@API/Project";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableTitle,
} from "@Atoms/Table/styles";
import { Dispatch } from "react";

const ProjectList = ({
  projectList,
  setProject,
}: {
  projectList: any;
  setProject: Dispatch<any>;
}) => {
  const handleProjectClick = async ({
    currentTarget,
  }: {
    currentTarget: any;
  }) => {
    const idx = currentTarget.getAttribute("data-idx");
    const res = await API({ api: getProjectData, data: idx });
    setProject(res[0]);
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
        {projectList.map((item: any) => (
          <TableRow
            key={item.studyIdx}
            onClick={handleProjectClick}
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

export default ProjectList;

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
