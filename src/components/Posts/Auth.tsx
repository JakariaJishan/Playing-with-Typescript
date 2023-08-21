import { useState } from "react";
type AuthType = {
  name: string;
  email: string;
};
const Auth = () => {
  const [user, setUser] = useState<AuthType | null>(null);

  const handleSignIn = () => {
    setUser({
      name: "jack",
      email: "jasdf@mail.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleSignIn}>sign in</button>
      <button onClick={handleLogOut}>log out</button>
      <p>welcome: {user?.name}</p>
    </div>
  );
};

export default Auth;
