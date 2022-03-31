import Header from "@Organisms/Common/Header";
import Footer from "@Organisms/Common/Footer";
import { LogOutButton, LogOutButtonContainer } from "./styles";
import { userInfoAtom } from "@Recoil/CheckLogin";
import { useSetRecoilState } from "recoil";
import { userInfo } from "@Type/Account";

const MyPageTemplate = () => {
  const setUser = useSetRecoilState<boolean | userInfo>(userInfoAtom);
  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUser(false);
    window.location.reload();
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
