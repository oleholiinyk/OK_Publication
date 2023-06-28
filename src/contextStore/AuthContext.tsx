import React, { useState, createContext, ReactNode } from 'react';

interface User {
  // Define your User interface here
  // Example:
  id: number;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface ContextAuthProps {
  children: ReactNode;
}

function ContextAuth({ children }: ContextAuthProps) {
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ContextAuth;
