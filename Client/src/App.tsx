import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import AdminPage from "@Pages/Admin";
import BoardPage from "@Pages/Board";
import ErrorPage from "@Pages/Error";
import LoginPage from "@Pages/Login";
import MainPage from "@Pages/Main";
import MyPage from "@Pages/MyPage";
import PrivateRoute from "Routes/PrivateRoute";
import AdminRoute from "Routes/AdminRoute";

const Header = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
`;

const App = () => {
  return (
    <>
      <Header>hi</Header>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/board" component={BoardPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <PrivateRoute path="/mypage" component={MyPage} />
        <AdminRoute path="/admin" component={AdminPage} />
        <Route path="*" component={ErrorPage} exact />
      </Switch>
    </>
  );
};

export default App;
