import { useRef, useState } from "react";
import Button from "@Atoms/Button";
import { SmallButtonType } from "@Style/.";
import { Label, ModalContainer } from "./styles";
import TechStack from "./TechStack";

import { ModalType } from "@Molecules/Content/type";
import { WorkCreate, checkStudy } from "@Molecules/Content/util";
import useCloseModal from "@src/Hook/useCloseModal";
import { userInfoAtom } from "@Recoil/CheckLogin";
import { useRecoilValue } from "recoil";

const CreateModal = ({ type, handleToggleStudy }: ModalType) => {
  const { userId } = useRecoilValue(userInfoAtom);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement[]>([]);
  const stackRef = useRef<HTMLInputElement>(null);
  const [stack, setStack] = useState<string[]>([]);
  const WORK_ARR = checkStudy({ type }) ? CREATE_STUDY_ARR : CREATE_PROJECT_ARR;
  const handleCreateWork = () => {
    if (!inputRef?.current) return;
    WorkCreate({ inputRef, stack, type, userId });
  };

  useCloseModal({ ref: modalRef, fn: handleToggleStudy });

  return (
    <ModalContainer ref={modalRef}>
      {WORK_ARR.map((item: any) => (
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
        color="#707070"
        borderColor="#707070"
        onClick={handleCreateWork}
        title="생성하기"
      />
    </ModalContainer>
  );
};

export default CreateModal;

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
