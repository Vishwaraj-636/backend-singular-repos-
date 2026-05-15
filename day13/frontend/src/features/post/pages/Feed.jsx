import React, { useState, useEffect } from 'react';

const Feed = () => {
  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          <div className="user">
            <img src="https://images.unsplash.com/photo-1778517436072-17faa6f57ca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Username</p>
          </div>
          <img src="https://images.unsplash.com/photo-1778701984813-753178bf817f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <div className="bottom">
            <p className='caption'>Caption caption</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feed;