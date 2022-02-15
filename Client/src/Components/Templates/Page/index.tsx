import Header from "@Organisms/Header";
import { useCallback } from "react";
import { withRouter } from "react-router-dom";
import { History } from "history";
import { PageContainer, HeaderContainer, BodyContainer } from "./styles";
import Footer from "@Organisms/Page/Footer";

const PageTemplate = ({ history }: { history: History }) => {
  const handleLoginClick = useCallback(() => {
    history.push("/login");
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

export default withRouter(PageTemplate);
