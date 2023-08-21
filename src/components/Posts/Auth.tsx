import { useState } from "react";
type AuthType = {
  name: string;
  email: string;
};
const Auth = () => {
  const [user, setUser] = useState<AuthType>({} as AuthType);

  const handleSignIn = () => {
    setUser({
      name: "jack",
      email: "jasdf@mail.com",
    });
  };

  return (
    <div>
      <button onClick={handleSignIn}>sign in</button>
      <p>welcome: {user.name}</p>
    </div>
  );
};

export default Auth;
