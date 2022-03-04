import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

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

import RegisterPage from "@Pages/Register";
import { ROOM_BOARD_URL } from "@Constant/.";
import PhotosPage from "@Pages/Phtos";
import Spin from "@Atoms/Spinner";

const App = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Suspense fallback={<Spin />}>
        <Routes>
          <PublicRoute path="/" element={<Page />} />
          <PublicRoute path="/before" element={<BeforePage />} />
          <PublicRoute path="/login" element={<LoginPage />} />
          <PublicRoute path="/register" element={<RegisterPage />} />

          <PrivateRoute path="/main" element={<MainPage />} />
          <PrivateRoute path="/board" element={<BoardPage />} />
          <PrivateRoute path="/notice" element={<NoticePage />} />

          <PrivateRoute path="/project" element={<ProjectPage />} />
          <PrivateRoute path="/study" element={<StudyPage />} />

          <PrivateRoute path="/mypage" element={<MyPage />} />
          <PrivateRoute path={ROOM_BOARD_URL} element={<ReservePage />} />
          <PrivateRoute path="/rank" element={<RankingPage />} />
          <PrivateRoute path="/photos" element={<PhotosPage />} />

          <AdminRoute path="/admin" element={<AdminPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
