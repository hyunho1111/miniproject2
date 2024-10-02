import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import React from 'react'

const App = () => {
  return (
    <div className="w-screen h-screen bg-slate-300 flex items-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/login" element={<Login />} />;
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App