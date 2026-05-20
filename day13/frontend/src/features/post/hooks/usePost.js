import { createPost, getFeed } from "../services/post.api.js";
import { useContext } from "react";
import { PostContext } from "../post.context.jsx"


export const usePost = () => {
  const context = useContext(PostContext)
  const { loading, post, feed, setloading, setfeed, setpost } = context

  const handleGetFeed = async () => {
    setloading(true)
    const data = await getFeed()
    setfeed(data.posts)
    setloading(false)
  }

  const handleCreatePost = async (imageFile, caption) => {
    setloading(true)
    const data = await createPost(imageFile, caption)
    setfeed([data.post, ...feed])
    setloading(false)
  }

  return { loading, feed, post, handleGetFeed, handleCreatePost }
}