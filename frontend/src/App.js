import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";

export default function App() {
    const [isLoggedIn, setLoggedIn ] = useState(false);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/register"
            element={
              <Register setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />
            }
          ></Route>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setLoggedIn} />}
          ></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}
