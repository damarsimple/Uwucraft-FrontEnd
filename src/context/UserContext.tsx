import { createContext } from "react";
import { Usercart, User } from "../type/type";
export interface IUserContext {
  session?: User;
  isLogged: boolean;
  set?: (data: User) => void;
  destroy?: () => void;
}
export interface Context {
  session: IUserContext;
  setSession?: React.Dispatch<React.SetStateAction<IUserContext>>;
  destroySession?: () => void;
  carts: Array<Usercart | null>;
  setCarts?: React.Dispatch<React.SetStateAction<(Usercart | null)[]>>;
  refetchCarts?: () => void;
}

export const UserContext = createContext<Context>({
  session: { isLogged: false },
  carts: [],
});
export default UserContext;
