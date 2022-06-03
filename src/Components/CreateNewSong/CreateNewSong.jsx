import React, { useState } from 'react';
import axios from 'axios';



const CreatNewSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    async function handleSubmit(event){
        event.preventDefault();

        let newEntry = {
           
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre, 
        }
        let response = await axios.post('http://127.0.0.1:8000/api/songs/', newEntry)
        props.getAllSongs();
        console.log(response.data)
    }

    return (
        <form onSubmit={handleSubmit}>

    
            <tr><label>Title</label></tr>
            <input type= 'text' value={title} onChange={(event) => setTitle(event.target.value)}/>
            <tr><label>Artist</label></tr>
            <input type= 'text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <tr><label>Album</label></tr>
            <input type= 'text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <tr><label>Release Date</label></tr>
            <input type= 'date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            <tr><label>Genre</label></tr>
            <input type= 'text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <button type='submit'>Post song</button>
  
        </form>
    );
}
export default CreatNewSong;