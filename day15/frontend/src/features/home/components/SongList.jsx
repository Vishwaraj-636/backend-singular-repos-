import React from 'react';
import { useSong } from '../hooks/useSong';
import '../style/SongList.scss';

const SongList = () => {
  const { songs, song, setsong } = useSong();

  if (!songs || songs.length === 0) {
    return (
      <div className="songList">
        <h3>Playlist</h3>
        <p className="emptyState">No songs found for this mood.</p>
      </div>
    );
  }

  return (
    <div className="songList">
      <h3>Playlist</h3>
      <div className="listContainer">
        {songs.map((s) => (
          <div 
            key={s._id} 
            className={`songItem ${song?._id === s._id ? 'active' : ''}`}
            onClick={() => setsong(s)}
          >
            <img src={s.posterUrl} alt={s.title} className="itemPoster" />
            <div className="itemDetails">
              <p className="itemTitle">{s.title}</p>
              <p className="itemMood">{s.mood}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;