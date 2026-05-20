import React, { useState, useEffect } from 'react';
import "../style/feed.scss"
import Post from "../components/Post"
import { usePost } from '../hooks/usePost';
import Nav from '../../shared/component/Nav';
const Feed = () => {

  const { feed, handleGetFeed, loading } = usePost()

  useEffect(() => {
    handleGetFeed()
  }, [])

  if (loading || !feed) {
    return (
      <main><h1>Feed is loading...</h1></main>
    )
  }

  return (
    <main className='feed-page'>
      <Nav/>
      <div className="feed">
        <div className="posts">
          {feed.map(post=>{
            return <Post user={post.user} post={post}/>
          })}
        </div>
      </div>
    </main>
  );
};

export default Feed;