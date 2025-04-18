// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";
import "./scss/common.scss";

import DetailView from "./components/pages/DetailView.jsx";
import Mypage from "./components/pages/Mypage.jsx";
import Login from "./components/pages/Login.jsx";
import Join from "./components/pages/Join.jsx";
import MyEdu from "./components/pages/MyEdu.jsx";
import Board from "./components/pages/Board.jsx";
import CartList from "./components/modules/CartList.jsx";
import SearchPage from "./components/pages/SearchPage.jsx";
import { CartProvider } from "./components/modules/CartContext.jsx";
import VideoDetail from "./components/pages/VideoDetail.jsx";

// 메인 컴포넌트 ///////////////////////////
export default function MainComponent() {
  // 리턴 코드구역
  return (
    <CartProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/detail/:id" element={<DetailView />} />
            <Route path="/videodetail/:id" element={<VideoDetail />} />
            <Route path="/cartlist" element={<CartList />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/myedu" element={<MyEdu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/board" element={<Board />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
} //// MainComponent ////

/// 컴포넌트 출력 ///
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.getElementById("root"));
// 출력하기
root.render(<MainComponent />);
