import React from "react";
import { API } from "@API/.";
import { getStudyAccept, getStudyDeny } from "@API/Study";
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableRow,
  TableTitle,
} from "@Atoms/Table/styles";
import { PROJECT_TITLE } from "../List";

const Project = ({ project }: { project: any }) => {
  const handleAcceptClick = async ({ target }: { target: any }) => {
    const container = target.closest("#userContainer");
    const idx = container.getAttribute("data-idx");
    const res = await API({ api: getStudyAccept, data: idx });
    console.log(res);
  };

  const handleDenyClick = async ({ target }: { target: any }) => {
    const container = target.closest("#userContainer");
    const idx = container.getAttribute("data-idx");
    const res = await API({ api: getStudyDeny, data: idx });
    console.log(res);
  };
  return (
    <Table>
      <TableHead>
        <TableRow>
          {PROJECT_TITLE.map((item) => (
            <TableTitle key={item.key}>{item.title}</TableTitle>
          ))}
          <TableTitle>승인</TableTitle>
          <TableTitle>거절</TableTitle>
        </TableRow>
      </TableHead>
      <TableBody>
        {project?.userProjects?.map((item: any) => (
          <TableRow
            key={item.studyIdx}
            id="userContainer"
            data-idx={item.studyIdx}
          >
            {PROJECT_TITLE.map((title) => (
              <TableData key={title.key}>{item[title.key]}</TableData>
            ))}
            <TableData onClick={handleAcceptClick}>승인</TableData>
            <TableData onClick={handleDenyClick}>거절</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default React.memo(Project);
