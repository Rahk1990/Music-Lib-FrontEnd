import React, { useEffect, useState } from 'react';
import CreateNewSong from './Components/CreateNewSong/CreateNewSong'
import axios from 'axios';
import SongList from './Components/DisplaySongs/DisplaySongs';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {

  // const [entries, setEntries] = useState([{artist: 'Big Boi', album:'Ridin', title: 'Still Tippin', genre: 'hiphop', release_date: '2002-01-01' }])
  const [entries, setEntries] = useState([{artist: '', album:'', title: '', genre: '', release_date: ''}]);
  const [searchedEntries, setSearchEntries] = useState([{artist: '', album:'', title: '', genre: '', release_date: ''}]);
  // const [newEntry, setNewEntry] = useState 
  // function createSong(entry){
  // let song = {
  //   createSong(){}
  // }
 
  
  useEffect(() => {
    getAllSongs();
  }, [])


  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/songs/');
    setEntries(response.data);
    setSearchEntries(response.data);
    console.log(response.data)
  }

  const songFilter = (searchedEntries) => {
    console.log(searchedEntries)
  };

  // createSong().then(
  //   CreateNewSong(newEntry)
  // )

  return (
    <div>
       <div><button onClick ={() => getAllSongs()}>Refresh List</button></div>
      <div>
          <div><SearchBar songFilter ={songFilter}/></div>
        <div>
          <div>Add Song:</div>
          <CreateNewSong getAllSongs={getAllSongs}/>
          <SongList parentEntries = {entries} />
        
        </div>

        {/* <div><button onClick ={() => testSong()}>Submit</button></div> */}
        {/* <table>
          <thead>
            
            <th>Artist</th>
            <th>Album</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
          </thead>
          <tbody>
            <td>Big Boi</td>
            <td>Ridin</td>
            <td>Still Tippin</td>
            <td>hiphop</td>
            <td>2002-01-01</td>
          </tbody>
        </table> */}
      </div>
    </div>
  );
}

export default App;
