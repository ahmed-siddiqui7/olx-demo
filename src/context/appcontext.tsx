"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  user: string | null;
  setUser: (user: string | null) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("");
  return context;
};
