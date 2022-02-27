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

const Study = ({ study }: { study: any }) => {
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
          {STUDY_INFO.map((item) => (
            <TableTitle>{item}</TableTitle>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {study?.userStudies &&
          study?.userStudies?.map((item: any) => (
            <TableRow
              key={item.studyIdx}
              id="userContainer"
              data-idx={item.studyIdx}
            >
              <TableData>{study?.name}</TableData>
              <TableData>{item?.college}</TableData>
              <TableData>{item?.name}</TableData>
              <TableData>{item.status}</TableData>
              <TableData onClick={handleAcceptClick}>승인</TableData>
              <TableData onClick={handleDenyClick}>거절</TableData>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default React.memo(Study);

const STUDY_INFO = ["스터디명", "학과", "이름", "상태", "승인", "거절"];
