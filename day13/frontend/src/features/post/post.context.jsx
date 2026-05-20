import { createContext, useState } from "react";

export const PostContext = createContext()

export const PostContextProvider = ({ children }) => {

  const [loading, setloading] = useState(false)
  const [post, setpost] = useState(null)
  const [feed, setfeed] = useState(null)

  return (
    <PostContext.Provider value={{ loading, post, feed, setloading, setfeed, setpost }}>
      {children}
    </PostContext.Provider>
  )
}
