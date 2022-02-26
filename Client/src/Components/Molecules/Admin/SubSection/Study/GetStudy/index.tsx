import { API } from "@API/.";
import { getStudyAllSelector } from "@Recoil/Admin";
import { Suspense, useState } from "react";
import { useRecoilValue } from "recoil";
import { getStudyAccept, getStudyData, getStudyDeny } from "../API";

const GetStudy = () => {
  const totalStudyList = useRecoilValue(getStudyAllSelector);
  const [studyList, setStudyList] = useState(totalStudyList);
  const [study, setStudy] = useState<any>();

  const handleStudySearch = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    // setStudyList(
    //   studyList.filter(
    //     (item: { status: string }) => item.status === STUDY_STATE[value]
    //   )
    // );
  };

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
    <Suspense fallback={null}>
      <select onChange={handleStudySearch}>
        <option>모집중</option>
        <option>진행중</option>
        <option>종료</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>스터디 명</th>
            <th>설명</th>
            <th>상태</th>
            <th>스터디 장</th>
          </tr>
        </thead>
        <tbody>
          {studyList.map((item: any) => (
            <tr
              key={item.studyIdx}
              onClick={handleStudyClick}
              data-idx={item.studyIdx}
            >
              <th>{item.name}</th>
              <th>{item.description}</th>
              <th>{item.status}</th>
              <th>{item.leaderName}</th>
            </tr>
          ))}
        </tbody>
      </table>

      {study && (
        <table>
          <thead>
            <tr>
              <th>스터디명</th>
              <th>학과</th>
              <th>이름</th>
              <th>상태</th>
              <th>승인</th>
              <th>거절</th>
            </tr>
          </thead>
          <tbody>
            {study?.userStudies &&
              study?.userStudies?.map((item: any) => (
                <tr
                  key={item.studyIdx}
                  id="userContainer"
                  data-idx={item.studyIdx}
                >
                  <th>{study?.name}</th>
                  <th>{item?.college}</th>
                  <th>{item?.name}</th>
                  <th>{item.status}</th>
                  <th onClick={handleAcceptClick}>승인</th>
                  <th onClick={handleDenyClick}>거절</th>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </Suspense>
  );
};

export default GetStudy;

const STUDY_STATE = {
  진행중: "collecting",
  모집중: "",
  종료: "",
};
