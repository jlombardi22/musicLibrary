import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    try {
      let response = await axios.get("http://localhost:3000/api/musicLibrary");
      setSongs(response.data);
    } catch (error) {
      console.log("Error in makeGetRequest API call!");
    }
  }
  return (
    <div>
      {songs.map(song => (
        <li key={song.id}>{song.name}</li>
      ))}
    </div>
  );
}

export default App;
