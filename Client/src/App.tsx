import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Page = lazy(() => import("@Pages/."));
const BeforePage = lazy(() => import("@Pages/Before"));
const AdminPage = lazy(() => import("@Pages/Admin"));
const BoardPage = lazy(() => import("@Pages/Board"));
const ErrorPage = lazy(() => import("@Pages/Error"));
const LoginPage = lazy(() => import("@Pages/Login"));
const MainPage = lazy(() => import("@Pages/Main"));
const MyPage = lazy(() => import("@Pages/MyPage"));
const NoticePage = lazy(() => import("@Pages/Notice"));
const ProjectPage = lazy(() => import("@Pages/Project"));
const StudyPage = lazy(() => import("@Pages/Study"));
const ReservePage = lazy(() => import("@Pages/Reserve"));
const RankingPage = lazy(() => import("@Pages/Ranking"));

import PublicRoute from "@Route/PublicRoute";
import PrivateRoute from "@Route/PrivateRoute";
import AdminRoute from "@Route/AdminRoute";

import Spin from "@Atoms/Spinner";
import RegisterPage from "@Pages/Register";
import { ROOM_BOARD_URL } from "@Constant/.";
import PhotosPage from "@Pages/Phtos";

const App = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Suspense fallback={<Spin />}>
        <Switch>
          <PublicRoute path="/" element={<Page />} exact />
          <PublicRoute path="/before" element={<BeforePage />} exact />
          <PublicRoute path="/login" element={<LoginPage />} exact />
          <PublicRoute path="/register" element={<RegisterPage />} exact />

          <PrivateRoute path="/main" element={<MainPage />} exact />
          <PrivateRoute path="/board" element={<BoardPage />} />
          <PrivateRoute path="/notice" element={<NoticePage />} />

          <PrivateRoute path="/project" element={<ProjectPage />} exact />
          <PrivateRoute path="/study" element={<StudyPage />} exact />

          <PrivateRoute path="/mypage" element={<MyPage />} exact />
          <PrivateRoute path={ROOM_BOARD_URL} element={<ReservePage />} exact />
          <PrivateRoute path="/rank" element={<RankingPage />} exact />
          <PrivateRoute path="/photos" element={<PhotosPage />} />

          <AdminRoute path="/admin" element={<AdminPage />} />
          <Route path="*" render={() => ErrorPage} exact />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
