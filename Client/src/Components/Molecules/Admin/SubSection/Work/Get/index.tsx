import { Suspense, useState } from "react";
import { useRecoilValue } from "recoil";
import { BasicType, WorkType } from "../type";

import { getWorkListType, WorkSearch } from "../util";
import FilterBar from "./FilterBar";
import WorkList from "./List";
import Work from "./Work";

const GetWork = ({ type }: BasicType) => {
  const totalWorkList = useRecoilValue(getWorkListType({ type }));
  const [workList, setWorkList] = useState<WorkType[]>(totalWorkList);
  const [work, setWork] = useState<WorkType>();

  const handleSearch = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    WorkSearch({ value, workList, setWorkList });
  };

  return (
    <Suspense fallback={null}>
      <FilterBar handleWorkSearch={handleSearch} />
      <WorkList workList={workList} setWork={setWork} type={type} />
      {work && <Work work={work} type={type} />}
    </Suspense>
  );
};

export default GetWork;
