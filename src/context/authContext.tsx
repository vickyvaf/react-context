import { createContext, useContext, useState } from "react";

type Context = {
  input: string;
  setInput: (value: string) => void;
};

type Props = {
  children: React.ReactNode;
};

export const AuthContext = createContext<Context>({
  input: "",
  setInput() {},
});

export const AuthProvider = ({ children }: Props) => {
  const [input, setInput] = useState<string>("");

  const authContextValue = {
    input,
    setInput,
  };
  
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}
