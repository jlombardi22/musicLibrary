import React, { useState, useEffect } from "react";
import "./App.css";
import Songs from "./components/SongForm/AddSongsForm";
import MusicTable from "./components/DisplaySong/MusicTable";
import NavBar from "./components/NavBar/NavBar";
import axios from "axios";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    try {
      let response = await axios.get("http://127.0.0.1:8000/music/");
      setSongs(response.data);
      console.log(response.data);
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
      <NavBar />
      <div>
        <Songs addNewSong={addNewSong} />
        <MusicTable postMade={songs} />
      </div>
    </div>
  );
}

export default App;
