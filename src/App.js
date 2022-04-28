import React, { useState, useEffect } from "react";
import "./App.css";
import Songs from "./components/SongForm/AddSongsForm";
import MusicTable from "./components/DisplaySong/MusicTable";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);
  function addNewSong(song) {
    let composeSong = [song, ...songs];
    setSongs(composeSong);
  }
  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    try {
      let response = await axios.get("http://127.0.0.1:8000/music/");
      setSongs(response.data);
    } catch (error) {
      console.log("Error in makeGetRequest API call!");
    }
  }
  async function addNewSong(newSong) {
    let response = await axios.post("http://127.0.0.1:8000/music/", newSong);
    if (response.status === 201) {
      await getAllSongs();
    }
  }
  return (
    <div>
      <Songs addSong={addNewSong} />
      <MusicTable postMade={songs} />
    </div>
  );
}

export default App;
