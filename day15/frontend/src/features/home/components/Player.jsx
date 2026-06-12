import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSong } from '../hooks/useSong';
import '../style/Player.scss';

const Player = () => {
  const { song, loading } = useSong();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);

  const progress = useMemo(() => {
    if (!duration) {
      return 0;
    }

    return Math.min(100, (currentTime / duration) * 100);
  }, [currentTime, duration]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    audio.load();
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [song?.url]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.playbackRate = speed;
  }, [speed]);

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  };

  const seekBy = (seconds) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const nextTime = Math.min(duration || audio.duration || 0, Math.max(0, audio.currentTime + seconds));
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const jumpTo = (event) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const formatTime = (time) => {
    if (!Number.isFinite(time)) {
      return "0:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  };

  if (!song) {
    return null;
  }

  return (
    <div className="shell">
      <div className="card">
        <div className="artworkWrap">
          <img
            src={song.posterUrl}
            alt={song.title}
            className="artwork"
          />
        </div>

        <div className="content">
          <div className="songInfo">
            <h3 className="title">{song.title}</h3>
            <p className="subtitle">{loading ? "Loading track..." : song.mood}</p>
          </div>

          <div className="controlsRow">
            <button type="button" onClick={() => seekBy(-10)} className="iconButton">
              -10s
            </button>

            <button type="button" onClick={togglePlay} className="playButton">
              {isPlaying ? "Pause" : "Play"}
            </button>

            <button type="button" onClick={() => seekBy(10)} className="iconButton">
              +10s
            </button>
          </div>

          <div className="progressContainer">
            <div className="progressMeta">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            <div className="progressTrack">
              <input
                type="range"
                min="0"
                max={duration || 0}
                step="0.01"
                value={currentTime}
                onChange={jumpTo}
                className="slider"
                style={{ background: `linear-gradient(90deg, #8b5cf6 ${progress}%, rgba(255,255,255,0.1) ${progress}%)` }}
              />
            </div>
          </div>

          <div className="speedRow">
            {[1, 1.25, 1.5, 2].map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => setSpeed(rate)}
                className={`speedButton ${speed === rate ? "active" : ""}`}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>

        <audio
          ref={audioRef}
          src={song.url}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
          onEnded={() => setIsPlaying(false)}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};

export default Player;