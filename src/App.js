import React, { useEffect, useState } from 'react';
import CreateNewSong from './Components/CreateNewSong/CreateNewSong'
import axios from 'axios';
import SongList from './Components/DisplaySongs/DisplaySongs';


function App() {

  // const [entries, setEntries] = useState([{artist: 'Big Boi', album:'Ridin', title: 'Still Tippin', genre: 'hiphop', release_date: '2002-01-01' }])
  const [entries, setEntries] = useState([{artist: '', album:'', title: '', genre: '', release_date: ''}]);
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
    console.log(response.data)
  }

  async function createSong(){
    let newEntry = CreateNewSong();
    
    let response = await axios.post('http://127.0.0.1:8000/api/songs/', newEntry);
    setEntries(response.data);
    console.log(response.data)
  }
  // createSong().then(
  //   CreateNewSong(newEntry)
  // )

  return (
    <div>
       <div><button onClick ={() => getAllSongs()}>Submit</button></div>
       <div><button onClick ={() => createSong()}>Add Song</button></div>
      <div>
        <div>
          <CreateNewSong parentEntries ={entries} />
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
