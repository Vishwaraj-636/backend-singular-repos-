import { createPost, getFeed ,likePost,unlikePost} from "../services/post.api.js";
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

  const handleLikePost = async (post) => {
    const data = await likePost(post)
    await handleGetFeed()
  }

  const handleUnlikePost = async (post) => {
    const data = await unlikePost(post)
    await handleGetFeed()
  }

  return { loading, feed, post, handleGetFeed, handleCreatePost, handleLikePost, handleUnlikePost }
}