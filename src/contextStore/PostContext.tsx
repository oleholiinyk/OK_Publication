import React, { createContext, useState, ReactNode } from 'react';

interface Post {
  // Define your Post interface here
  // Example:
  id: number;
  title: string;
  content: string;
}

interface PostContextType {
  postContent: Post[];
  setPostContent: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const PostContext = createContext<PostContextType | undefined>(undefined);

interface ContextPostProps {
  children: ReactNode;
}

const ContextPost = ({ children }: ContextPostProps) => {
  const [postContent, setPostContent] = useState<Post[]>([]);

  return (
    <PostContext.Provider value={{ postContent, setPostContent }}>
      {children}
    </PostContext.Provider>
  );
};

export default ContextPost;
