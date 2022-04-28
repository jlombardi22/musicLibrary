// import { useEffect } from "react";
// import axios from "axios";

// const SongList = props => {
//   const [songs, setSongs] = useState([]);

//   useEffect(() => {
//     getAllSongs();
//   }, []);

//   async function getAllSongs() {
//     try {
//       let response = await axios.get("http://127.0.0.1:8000/music/");
//       setSongs(response.data);
//     } catch (error) {
//       console.log("Error in makeGetRequest API call!");
//     }
//   }

//   //   async function addNewSong(newSong) {
//   //     let response = await axios.post("http://127.0.0.1:8000/music/", newSong);
//   //     if (response.status === 201) {
//   //       await getAllSongs();
//   //     }
//   //   }
//   return <div></div>;
// };

// export default SongList;
