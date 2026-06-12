import { getSong } from "../service/song.api";
import { songContext } from "../song.context";
import { useContext } from "react";


export const useSong = () => {
  const context = useContext(songContext)

  if (!context) {
    throw new Error("useSong must be used within a SongContextProvider");
  }

  const { loading, setloading, song, setsong, songs, setSongs } = context

  async function handleGetSong({ mood }) {
    setloading(true)

    try {
      const data = await getSong({ mood })
      setSongs(data.songs || [])
      if (data.songs && data.songs.length > 0) {
        setsong(data.songs[0])
      }
      return data.songs
    } finally {
      setloading(false)
    }
  }

  return ({
    loading, song, setsong, songs, handleGetSong
  })
}