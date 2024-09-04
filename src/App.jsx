import { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLogin from "./pages/auth/AuthLogin";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<AuthLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
