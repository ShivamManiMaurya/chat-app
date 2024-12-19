import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Messages from "./pages/Messages";

// local imports
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Messages />} />
      </Routes>
    </>
  );
}

export default App;
