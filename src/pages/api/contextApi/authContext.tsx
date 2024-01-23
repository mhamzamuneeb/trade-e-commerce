// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type AuthContextProps = {
  token: string | null;
  setToken: (token: string | null) => void;
  getToken: () => string | null; // New function to get the token
};

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const getToken = () => {
    return token;
  };

  return (
    <AuthContext.Provider value={{ token, setToken, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
