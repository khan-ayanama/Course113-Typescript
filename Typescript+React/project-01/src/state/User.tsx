import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const hanldeLogin = () => {
    setUser({
      name: "Ayan",
      email: "ayan@gmail.com",
    });
  };
  const hanldeLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={hanldeLogin}>Login</button>
      <button onClick={hanldeLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
