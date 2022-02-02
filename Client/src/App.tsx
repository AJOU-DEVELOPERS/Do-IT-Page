import { Suspense } from "react";
import { Oval } from "react-loader-spinner";
import { Route, Switch } from "react-router-dom";

import AdminPage from "@Pages/Admin";
import BoardPage from "@Pages/Board";
import ErrorPage from "@Pages/Error";
import LoginPage from "@Pages/Login";
import MainPage from "@Pages/Main";
import MyPage from "@Pages/MyPage";

import Header from "@Organisms/Header";

import PrivateRoute from "@Route/PrivateRoute";
import AdminRoute from "@Route/AdminRoute";

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Oval color="blue" width={100} height={100} />}>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/board" component={BoardPage} exact />
          <Route path="/login" component={LoginPage} exact />
          <PrivateRoute path="/mypage" component={MyPage} />
          <AdminRoute path="/admin" component={AdminPage} />
          <Route path="/error" component={ErrorPage} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
