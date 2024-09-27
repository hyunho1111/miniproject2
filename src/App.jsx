import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import React from 'react'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />;
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App