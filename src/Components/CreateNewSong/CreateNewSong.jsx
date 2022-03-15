import React, { useState } from 'react';


const CreatNewSong = (props) => {

    // const [entries, setEntries] = useState([{artist: '', album:'', title: '', genre: '', release_date: ''}]);
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    function handleSubmit(event){
        event.preventDefault();

        let newEntry = {
           
            title: title,
            artist: artist,
            album: album,
            releaseDate: releaseDate,
            genre: genre, 
        }
        props.addNewSong(newEntry)
    }

    return (
        <form onSubmit={handleSubmit}>

            
{/* 'id', 'title', 'artist', 'album', 'release_date', 'genre' */}

    
        <tr><label>Title</label></tr>
        <input type= 'title' value={title} onChange={(event) => setTitle(event.target.value)}/>
        <tr><label>Artist</label></tr>
        <input type= 'artist' value={artist} onChange={(event) => setArtist(event.target.value)}/>
        <tr><label>Album</label></tr>
        <input type= 'album' value={album} onChange={(event) => setAlbum(event.target.value)}/>
        <tr><label>Realease Date</label></tr>
        <input type= 'release_date' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
        <tr><label>Genre</label></tr>
        <input type= 'genre' value={genre} onChange={(event) => setGenre(event.target.value)}/>

                   
               
            

        </form>
    );
}
export default CreatNewSong;