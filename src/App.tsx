import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// mui imports

// pages
import Messages from "./pages/Messages";

// local imports
import "./App.css";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Messages />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
