import Header from "@Organisms/Common/Header";
import { useCallback } from "react";

import { PageContainer, HeaderContainer, BodyContainer } from "./styles";
import Footer from "@Organisms/Page/Footer";
import { useNavigate } from "react-router-dom";

const PageTemplate = () => {
  const navigator = useNavigate();
  const handleLoginClick = useCallback(() => {
    navigator("/login");
  }, []);

  return (
    <>
      <PageContainer />
      <HeaderContainer>
        <Header onClick={handleLoginClick} />
      </HeaderContainer>
      <BodyContainer>
        <Footer />
      </BodyContainer>
    </>
  );
};

export default PageTemplate;
