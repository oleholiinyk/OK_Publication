import React, { createContext, useState, ReactNode } from 'react';

interface Post {
  // Define your Post interface here
  // Example:
  id: number;
  title: string;
  content: string;
}

interface AllPostContextType {
  allPost: Post[];
  setAllPost: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const AllPostContext = createContext<AllPostContextType | null>(null);

interface ContextAllPostProps {
  children: ReactNode;
}

function ContextAllPost({ children }: ContextAllPostProps) {
  const [allPost, setAllPost] = useState<Post[]>([]);

  return (
    <AllPostContext.Provider value={{ allPost, setAllPost }}>
      {children}
    </AllPostContext.Provider>
  );
}

export default ContextAllPost;
