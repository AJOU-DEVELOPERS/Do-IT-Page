import { getStudyAllSelector } from "@Recoil/Admin";
import { Suspense, useState } from "react";
import { useRecoilValue } from "recoil";
import StudyFilterBar from "./FilterBar";
import StudyList from "./List";
import Study from "./Study";
import { StudySearch } from "./util";

const GetStudy = () => {
  const totalStudyList = useRecoilValue(getStudyAllSelector);
  const [studyList, setStudyList] = useState(totalStudyList);
  const [study, setStudy] = useState<any>();

  const handleStudySearch = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    StudySearch({ value, studyList, setStudyList });
  };

  return (
    <Suspense fallback={null}>
      <StudyFilterBar handleStudySearch={handleStudySearch} />
      <StudyList studyList={studyList} setStudy={setStudy} />

      {study && <Study study={study} />}
    </Suspense>
  );
};

export default GetStudy;
