import { API } from "@API/.";
import { getProjectAccept, getProjectData, getProjectDeny } from "@API/Project";
import { getStudyAllSelector } from "@Recoil/Admin";
import { Suspense, useState } from "react";
import { useRecoilValue } from "recoil";

const GetProject = () => {
  const totalProjectList = useRecoilValue(getStudyAllSelector);
  const [projectList, setProjectList] = useState(totalProjectList);
  const [project, setProject] = useState<any>();

  const handleProjectSearch = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    // setProjectList(
    //   totalProjectList.filter(
    //     (item: { status: string }) => item.status === PROJECT_STATE[value]
    //   )
    // );
  };

  const handleProjectClick = async ({
    currentTarget,
  }: {
    currentTarget: any;
  }) => {
    const idx = currentTarget.getAttribute("data-idx");
    const res = await API({ api: getProjectData, data: idx });
    setProject(res[0]);
  };

  const handleAcceptClick = async ({ target }: { target: any }) => {
    const container = target.closest("#userContainer");
    const idx = container.getAttribute("data-idx");
    const res = await API({ api: getProjectAccept, data: idx });
    console.log(res);
  };

  const handleDenyClick = async ({ target }: { target: any }) => {
    const container = target.closest("#userContainer");
    const idx = container.getAttribute("data-idx");
    const res = await API({ api: getProjectDeny, data: idx });
    console.log(res);
  };

  return (
    <Suspense fallback={null}>
      <select onChange={handleProjectSearch}>
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
          {projectList.map((item: any) => (
            <tr
              key={item.studyIdx}
              onClick={handleProjectClick}
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

      {project && (
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
            {project?.userProjects &&
              project.userProjects?.map((item: any) => (
                <tr
                  key={item.projectIdx}
                  id="userContainer"
                  data-idx={item.projectIdx}
                >
                  <th>{project?.name}</th>
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

export default GetProject;

const PROJECT_STATE = {
  진행중: "collecting",
  모집중: "",
  종료: "",
};
