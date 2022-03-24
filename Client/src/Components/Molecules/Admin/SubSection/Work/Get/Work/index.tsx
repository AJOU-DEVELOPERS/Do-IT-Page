import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableTitle,
  TableBody,
  TableData,
} from "@Atoms/Table/styles";
import { DeepWorkType, UserWorkType, WorkType } from "../../type";
import { AcceptClick, DenyClick } from "../../util";

const Work = ({ work, type }: DeepWorkType) => {
  const userWork: UserWorkType[] = work.userStudies ?? work.userProjects;
  const handleAcceptClick = async ({ target }: { target: any }) =>
    AcceptClick({ target, type });

  const handleDenyClick = ({ target }: { target: any }) =>
    DenyClick({ target, type });

  return (
    <Table>
      <TableHead>
        <TableRow>
          {WORK_USER.map((item) => (
            <TableTitle key={item.key}>{item.title}</TableTitle>
          ))}
          <TableTitle>승인</TableTitle>
          <TableTitle>거절</TableTitle>
        </TableRow>
      </TableHead>
      <TableBody>
        {userWork?.map((item: UserWorkType) => {
          const check = checkStatus(item);
          return (
            <TableRow
              key={item.userStudyIdx ?? item.userProjectIdx}
              id="userContainer"
              data-idx={item.userStudyIdx ?? item.userProjectIdx}
            >
              {WORK_USER.map((title) => {
                const text = getText(title, item, work);
                return <TableData key={title.key}>{text}</TableData>;
              })}
              <TableData onClick={check ? handleAcceptClick : undefined}>
                {check ? "승인" : ""}
              </TableData>
              <TableData onClick={check ? handleDenyClick : undefined}>
                {check ? "거절" : ""}
              </TableData>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default React.memo(Work);

const checkStatus = (item: UserWorkType) => item.status === "waiting";

const getText = (
  title: { key: string; title: string },
  item: UserWorkType,
  work: WorkType
) =>
  title.key === "status"
    ? item[title.key]
    : title.key === "userName"
    ? item.user.name
    : work[title.key];

export const WORK_USER = [
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
    key: "userName",
    title: "회원 이름",
  },
];
