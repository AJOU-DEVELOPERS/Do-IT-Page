import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Page from "@Pages/.";
import AdminPage from "@Pages/Admin";
import BoardPage from "@Pages/Board";
import ErrorPage from "@Pages/Error";
import LoginPage from "@Pages/Login";
import MainPage from "@Pages/Main";
import MyPage from "@Pages/MyPage";
import NoticePage from "@Pages/Notice";
import ProjectPage from "@Pages/Project";
import StudyPage from "@Pages/Study";
import ReservePage from "@Pages/Reserve";
import RankingPage from "@Pages/Ranking";

import PublicRoute from "@Route/PublicRoute";
import PrivateRoute from "@Route/PrivateRoute";
import AdminRoute from "@Route/AdminRoute";

import Button from "@Atoms/Button";
import Spin from "@Atoms/Spinner";
import {
  SmallButtonType,
  MediumButtonType,
  LargeButtonType,
} from "@Constant/.";
import { sayHello } from "@Util/.";

const App = () => {
  const handleMediumButtonClick = () => console.log(sayHello());
  return (
    <Suspense fallback={<Spin />}>
      <Button {...SmallButtonType} title={"hihi"} />
      <Button
        {...MediumButtonType}
        title="컴포넌트 확장"
        onClick={handleMediumButtonClick}
      />
      <Button {...LargeButtonType} />
      <Switch>
        <PublicRoute path="/" component={Page} exact />
        <PublicRoute path="/login" component={LoginPage} exact />

        <PrivateRoute path="/main" component={MainPage} exact />
        <PrivateRoute path="/board" component={BoardPage} exact />
        <PrivateRoute path="/notice" component={NoticePage} exact />

        <PrivateRoute path="/project" component={ProjectPage} exact />
        <PrivateRoute path="/study" component={StudyPage} exact />

        <PrivateRoute path="/mypage" component={MyPage} exact />
        <PrivateRoute path="/reserve" component={ReservePage} exact />
        <PrivateRoute path="/rank" component={RankingPage} exact />

        <AdminRoute path="/admin" component={AdminPage} />
        <Route path="*" component={ErrorPage} exact />
      </Switch>
    </Suspense>
  );
};

export default App;
