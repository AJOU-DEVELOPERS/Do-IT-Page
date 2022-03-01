import { useRef, useState } from "react";
import Button from "@Atoms/Button";
import { SmallButtonType } from "@Style/.";
import { Label } from "./styles";
import TechStack from "./TechStack";
import { BasicType } from "../type";
import { checkStudy, WorkCreate } from "../util";

const CreateWork = ({ type }: BasicType) => {
  const inputRef = useRef<HTMLInputElement[]>([]);
  const stackRef = useRef<HTMLInputElement>(null);
  const [stack, setStack] = useState<string[]>([]);

  const handleCreateWork = () => {
    if (!inputRef?.current) return;
    WorkCreate({ inputRef, stack, type });
  };

  return (
    <>
      {CREATE_PROJECT_ARR.map((item: any) => (
        <Label key={item.key}>
          <div>{item.title}</div>
          <input
            placeholder={item.text}
            ref={(el) =>
              ((inputRef.current as HTMLInputElement[])[item.key] =
                el as HTMLInputElement)
            }
          />
        </Label>
      ))}
      {!checkStudy({ type }) && (
        <TechStack stackRef={stackRef} stack={stack} setStack={setStack} />
      )}
      <Button
        {...SmallButtonType}
        color="#000000"
        onClick={handleCreateWork}
        title="생성하기"
      />
    </>
  );
};

export default CreateWork;

export const CREATE_PROJECT_ARR = [
  {
    title: "프로젝트 명",
    text: "프로젝트 명을 입력하세요",
    key: 0,
    value: "name",
  },
  {
    title: "프로젝트 설명",
    text: "프로젝트 설명을 입력하세요",
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
