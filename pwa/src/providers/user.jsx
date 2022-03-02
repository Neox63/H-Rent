import { UserContext } from "../utils/auth";

export default function UserProvider({ children }) {
  return (
    <UserContext.Provider
      value={{
        isLogged: false,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
