import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import PassPage from "./components/pass_page/PassPage";
import MainPage from "./components/MainPage";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pass" element={<PassPage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
};

// Alt + Shift + F

export default App;