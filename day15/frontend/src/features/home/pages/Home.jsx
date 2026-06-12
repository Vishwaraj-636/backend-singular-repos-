import React, { useState, useEffect } from 'react';
import FaceExpression from "../../expression/components/FaceExpression"
import Player from "../components/Player";
import SongList from "../components/SongList";
import { useSong } from '../hooks/useSong';
import { useAuth } from '../../auth/hooks/useAuth';
import '../style/Home.scss';
import "../../shared/styles/global.scss"

const Home = () => {

  const { handleGetSong } = useSong()
  const { handleLogout } = useAuth()

  return (
    <div className="homeContainer">

      <div className="header" style={{ position: 'absolute', top: '20px', right: '30px', zIndex: 50 }}>
        <button
          onClick={handleLogout}
          style={{ padding: '10px 24px', borderRadius: '8px', backgroundColor: '#ef4444', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
        >
          Logout
        </button>
      </div>

      <div className="mainContent">

        <div className="leftPanel">
          <FaceExpression
            onClick={(expression) => { handleGetSong(expression) }}
          />
        </div>
        <div className="rightPanel">
          <SongList />
        </div>
      </div>
      <div className="bottomPlayer">
        <Player />
      </div>
    </div>
  );
};

export default Home;