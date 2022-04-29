const MusicTable = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">title</th>
          <th scope="col">artist</th>
          <th scope="col">album</th>
          <th scope="col">genre</th>
          <th scope="col">release date</th>
        </tr>
      </thead>
      <tbody className="container-fluid song-card">
        {props.postMade.map((song, i) => {
          return (
            <tr key={i} className="table-rows">
              <th scope="row">{song.id}</th>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
              <td>{song.release_date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MusicTable;
