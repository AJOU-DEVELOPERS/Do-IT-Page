import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import MainPage from "src/Page/Main";
import BoardPage from "src/Page/Board";
import LoginPage from "src/Page/Login";
import MyPage from "src/Page/MyPage";
import ErrorPage from "src/Page/Error";

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
`;

function App() {
  return (
    <>
      <Container>hi</Container>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/board" component={BoardPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/mypage" component={MyPage} exact />
        <Route path="*" component={ErrorPage} exact />
      </Switch>
    </>
  );
}

export default App;
