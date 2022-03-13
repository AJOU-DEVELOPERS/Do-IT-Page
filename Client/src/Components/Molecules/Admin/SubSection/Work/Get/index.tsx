import { BasicType } from "@Molecules/Content/type";
import { Suspense, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { WorkType } from "../type";

import { getWorkListType, WorkSearch } from "../util";
import FilterBar from "./FilterBar";
import WorkList from "./List";
import Work from "./Work";

const GetWork = ({ type }: BasicType) => {
  const totalWorkList = useRecoilValue(getWorkListType({ type }));
  const [search, setSearch] = useState<string>("대기중");
  const [workList, setWorkList] = useState<WorkType[]>(
    totalWorkList.filter(
      (item: { status: string }) => item.status === "waiting"
    )
  );
  const [work, setWork] = useState<WorkType>();

  const handleSearch = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    WorkSearch({ value, totalWorkList, setWorkList });
    setSearch(value);
  };

  useEffect(() => {
    WorkSearch({ value: search, totalWorkList, setWorkList });
  }, [totalWorkList]);

  useEffect(() => {
    setWork(undefined);
  }, [workList]);

  return (
    <Suspense fallback={null}>
      <FilterBar handleWorkSearch={handleSearch} />
      <WorkList
        workList={workList}
        setWork={setWork}
        type={type}
        search={search}
      />
      {work && <Work work={work} type={type} />}
    </Suspense>
  );
};

export default GetWork;

type ObjType = {
  [index: string]: string;
  대기중: string;
  모집중: string;
  진행중: string;
  종료: string;
  거절: string;
};
export const WORK_STATE: ObjType = {
  대기중: "waiting",
  모집중: "collecting",
  진행중: "processing",
  종료: "done",
  거절: "deleted",
};
