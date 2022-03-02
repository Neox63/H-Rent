import { UserContext } from "../utils/auth";
import { useContext } from "react";

export const useUser = () => useContext(UserContext);
