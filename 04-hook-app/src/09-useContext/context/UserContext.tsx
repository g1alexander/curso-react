import { createContext } from "react";
import { User, user } from "./state";

interface Context {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = createContext<Context>({
  user,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => {},
});
