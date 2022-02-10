import Header from "@Organisms/Header";
import { useCallback } from "react";

const MainPageTemplate = () => {
  const handleUserIconClick = useCallback(() => {
    console.log("click userIcon");
  }, []);

  return (
    <>
      <Header onClick={handleUserIconClick}></Header>
    </>
  );
};

export default MainPageTemplate;
