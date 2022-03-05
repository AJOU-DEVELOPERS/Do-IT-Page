import { useState } from "react";
import Button from "@Atoms/Button";
import { checkStudy } from "@Molecules/Content/util";
import { SmallButtonType } from "@Style/.";
import { ButtonContainer } from "./styles";
import CreateModal from "./CreateModal";

const CreateWork = ({ type }: { type: string }) => {
  const [create, setCreate] = useState<boolean>(false);
  const title = checkStudy({ type }) ? "스터디 생성" : "프로젝트 생성";
  const handleToggleStudy = () => {
    setCreate(!create);
  };
  return (
    <>
      <ButtonContainer>
        <Button
          {...SmallButtonType}
          borderColor="#707070"
          color="#707070"
          onClick={handleToggleStudy}
          title={title}
        />
      </ButtonContainer>
      {create && (
        <CreateModal type={type} handleToggleStudy={handleToggleStudy} />
      )}
    </>
  );
};

export default CreateWork;
