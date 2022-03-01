import Header from "@Organisms/Common/Header";
import Content from "@Molecules/Content/studyProject";
import { Title } from "./styles";
import { useCallback } from "react";

const StudyTemp = () => {
  const handleUserIconClick = useCallback(() => {
    console.log("click userIcon");
  }, []);

  return (
    <>
      <Header onClick={handleUserIconClick} />
      <Title>스터디</Title>
      <Content type="study" />
    </>
  );
};
export default StudyTemp;
