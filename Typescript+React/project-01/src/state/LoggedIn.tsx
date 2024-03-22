import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const hanldeLogin = () => {
    setIsLoggedIn(true);
  };
  const hanldeLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={hanldeLogin}>Login</button>
      <button onClick={hanldeLogout}>Logout</button>
      <div>User is {isLoggedIn ? "Logged In" : "Logged Out"}</div>
    </div>
  );
};
