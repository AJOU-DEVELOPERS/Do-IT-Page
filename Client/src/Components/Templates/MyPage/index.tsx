import Header from "@Organisms/Common/Header";
import Footer from "@Organisms/Common/Footer";
import { LogOutButton, LogOutButtonContainer } from "./styles";
import { checkLoginNow } from "@Recoil/CheckLogin";
import { useSetRecoilState } from "recoil";

const MyPageTemplate = () => {
  const setUser = useSetRecoilState<boolean | any>(checkLoginNow);
  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUser(false);
  };

  return (
    <>
      <Header />
      <LogOutButtonContainer>
        <LogOutButton onClick={handleLogOut}>로그아웃</LogOutButton>
      </LogOutButtonContainer>
      <Footer />
    </>
  );
};

export default MyPageTemplate;
