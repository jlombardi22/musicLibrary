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

/* <div className="container-fluid song-card">
{props.postMade.map((song, i) => {
  return <div key={i} className="table"></div>;
})}
</div> */

/* <div className="card-body">
      <h5 className="card-title">{song.artist}</h5>
      <h5 className="card-title">{song.title}</h5>
      <h5 className="card-title">{song.album}</h5>
      <h5 className="card-title">{song.genre}</h5>
      <p className="card-text"></p>
    </div> */

// {/* <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table> */}
