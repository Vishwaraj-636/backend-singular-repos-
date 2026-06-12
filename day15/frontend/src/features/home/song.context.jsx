import { createContext, useState } from "react";

export const songContext = createContext(null);

export const SongContextProvider = ({ children }) => {
  const [songs, setSongs] = useState([]);
  const [song, setsong] = useState({
    url: "https://ik.imagekit.io/b6tn0hyqth/cohort-2/moodify/songs/Ye_Bikhra_Hai_Saaman__DOWNLOAD_MING__lI4gI1x9y.mp3",
    posterUrl: "https://ik.imagekit.io/b6tn0hyqth/cohort-2/moodify/posters/Ye_Bikhra_Hai_Saaman__DOWNLOAD_MING__1yxSdb1z4F.jpeg",
    title: "Ye Bikhra Hai Saaman [DOWNLOAD MING]",
    mood: "happy",
  });

  const [loading, setloading] = useState(false);
  return (
    <songContext.Provider value={{ loading, setloading, song, setsong, songs, setSongs }}>
      {children}
    </songContext.Provider>

  );
};