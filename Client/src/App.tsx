import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import AdminPage from "@Pages/Admin";
import BoardPage from "@Pages/Board";
import ErrorPage from "@Pages/Error";
import LoginPage from "@Pages/Login";
import MainPage from "@Pages/Main";
import MyPage from "@Pages/MyPage";

const Header = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
`;

function App() {
  return (
    <>
      <Header>hi</Header>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/board" component={BoardPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/mypage" component={MyPage} exact />
        <Route path="/admin" component={AdminPage} exact />
        <Route path="*" component={ErrorPage} exact />
      </Switch>
    </>
  );
}

export default App;
