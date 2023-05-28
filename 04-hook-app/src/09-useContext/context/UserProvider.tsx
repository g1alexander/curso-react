import { useState } from "react";
import { UserContext } from "./UserContext";
import { User, user as userState } from "./state";

interface Props {
  children: React.ReactNode;
}

export default function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User>(userState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
