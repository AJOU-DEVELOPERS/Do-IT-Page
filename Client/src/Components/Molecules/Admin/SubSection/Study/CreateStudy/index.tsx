import { API } from "@API/.";
import { MutableRefObject } from "react";
import { postCreateStudy } from "../API";

const CreateStudy = ({
  inputRef,
}: {
  inputRef: MutableRefObject<HTMLInputElement[]>;
}) => {
  const handleCreateStudy = async () => {
    if (!inputRef?.current) return;

    const data = {
      ...CREATE_STUDY_ARR.reduce((acc, cur) => {
        const tempValue = inputRef.current[cur.key].value;
        const value =
          cur.value === "totalHeadcount" ? Number(tempValue) : tempValue;
        return {
          ...acc,
          [cur.value]: value,
        };
      }, {}),
      leaderUserIdx: 1,
      leaderName: "김영진",
    };
    const res = await API({ api: postCreateStudy, data });
    res !== "true" ? alert("에러") : alert("성공");
    return;
  };
  return (
    <>
      {CREATE_STUDY_ARR.map((item: any) => (
        <div key={item.key}>
          <div>{item.title}</div>
          <input
            placeholder={item.text}
            ref={(el) =>
              ((inputRef.current as HTMLInputElement[])[item.key] =
                el as HTMLInputElement)
            }
          />
        </div>
      ))}
      <button onClick={handleCreateStudy}>생성하기</button>
    </>
  );
};
export default CreateStudy;

export const CREATE_STUDY_ARR = [
  {
    title: "스터디 명",
    text: "스터디 명을 입력하세요",
    key: 0,
    value: "name",
  },
  {
    title: "스터디 설명",
    text: "스터디 설명을 입력하세요",
    key: 1,
    value: "description",
  },
  {
    title: "총 인원",
    text: "총 인원을 입력하세요",
    key: 2,
    value: "totalHeadcount",
  },
];
