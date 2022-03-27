import React, { useEffect, useState } from "react";
import { isLogin } from "./auth";
import Header from "./components/header";
import AppRoutes from "./routes";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    isLogin() ? setIsLoggedIn(true) : setIsLoggedIn(false)
  }, [isLogin()])

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} />
      <AppRoutes />
    </div>
  );
};

export default App;
