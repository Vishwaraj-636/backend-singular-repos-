import React, { useState, useEffect, useRef } from 'react';
import "../style/createPost.scss"
import { usePost } from '../hooks/usePost';
import { useNavigate } from 'react-router';

const CreatePost = () => {


  const [caption, setcaption] = useState("")
  const postImageFieldRef = useRef(null)
  const navigate = useNavigate()
  const { loading, handleCreatePost } = usePost()

  async function handleSubmit(e) {
    e.preventDefault();

    const file = postImageFieldRef.current.files[0]

    await handleCreatePost(file, caption)
    navigate("/")
  }

  if (loading) {
    return <p>Creating Post...</p>
  }

  return (
    <main className='create-post-page'>
      <div className="form-container">
        <h1>Create post</h1>
        <form onSubmit={handleSubmit}>
          <label className='post-image-label' htmlFor="postImage">Select Image</label>
          <input hidden ref={postImageFieldRef} type="file" name="postImage" id="postImage" />
          <input
            value={caption}
            onChange={(e) => { setcaption(e.target.value) }}
            type="text" name="caption" id="caption" placeholder='Enter caption' />
          <button className='button primary-button'>Create Post</button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;