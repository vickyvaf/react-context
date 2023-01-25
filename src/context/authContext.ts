import { createContext } from "react";

type Context = {
  input: string;
  setInput: (value: string) => void;
};

export const AuthContext = createContext<Context>({
  input: "",
  setInput() {},
});
