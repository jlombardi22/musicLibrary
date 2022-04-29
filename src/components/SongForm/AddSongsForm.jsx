import React, { useState } from "react";

const AddSongForm = props => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  // const [releaseDate, setReleaseDate] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    let newSong = {
      title: title,
      artist: artist,
      album: album,
      // releaseDate: releaseDate,
      genre: genre,
    };
    console.log(newSong);
    props.addNewSong(newSong);
  }

  return (
    <div className="mb-3 row">
      <div className="col-sm-10">
        <form onSubmit={handlesubmit} className="song-form">
          <input
            className="form-control"
            placeholder="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            aria-label="default input example"
          ></input>
          <input
            className="form-control"
            placeholder="artist"
            value={artist}
            onChange={e => setArtist(e.target.value)}
            aria-label="default input example"
          ></input>
          <input
            className="form-control"
            placeholder="album"
            value={album}
            onChange={e => setAlbum(e.target.value)}
            aria-label="default input example"
          ></input>
          <input
            className="form-control"
            type="text"
            placeholder="genre"
            value={genre}
            onChange={e => setGenre(e.target.value)}
            aria-label="default input example"
          ></input>
          {/* <input
            className="form-control"
            type="date"
            placeholder="release date"
            value={releaseDate}
            onChange={e => setReleaseDate(e.target.value)}
            aria-label="default input example"
          ></input> */}
          <button type="submit" className="btn btn-secondary">
            Add Song
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSongForm;
