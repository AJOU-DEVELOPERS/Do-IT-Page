import { API } from "@API/.";
import { getStudyData } from "@API/Study";
import {
  Table,
  TableHead,
  TableRow,
  TableTitle,
  TableBody,
  TableData,
} from "@Atoms/Table/styles";
import { Dispatch } from "react";

const StudyList = ({
  studyList,
  setStudy,
}: {
  studyList: any;
  setStudy: Dispatch<any>;
}) => {
  const handleStudyClick = async ({
    currentTarget,
  }: {
    currentTarget: any;
  }) => {
    const idx = currentTarget.getAttribute("data-idx");
    const res = await API({ api: getStudyData, data: idx });
    setStudy(res[0]);
    console.log(res[0]);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {STUDY_TITLE.map((item) => (
            <TableTitle>{item}</TableTitle>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {studyList.map((item: any) => (
          <TableRow
            key={item.studyIdx}
            onClick={handleStudyClick}
            data-idx={item.studyIdx}
          >
            <TableData>{item.name}</TableData>
            <TableData>{item.description}</TableData>
            <TableData>{item.status}</TableData>
            <TableData>{item.leaderName}</TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudyList;

const STUDY_TITLE = ["스터디 명", "설명", "상태", "스터디 장"];
