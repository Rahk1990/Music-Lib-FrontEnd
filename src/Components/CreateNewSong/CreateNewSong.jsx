import React, { useState } from 'react';


const CreatNewSong = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    function handleSubmit(event){
        event.preventDefault();

        let newEntry = {
            id: 1,
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

            <table>
                <div>
                
                    <tr>
                        <tr><label>Title</label></tr>
                        <input type= 'title' value={title} onChange={(event) => setTitle(event.target.value)}/>
                        <tr><label>Artist</label></tr>
                        <input type= 'artist' value={title} onChange={(event) => setArtist(event.target.value)}/>
                        <tr><label>Album</label></tr>
                        <input type= 'album' value={title} onChange={(event) => setAlbum(event.target.value)}/>
                        <tr><label>Realease Date</label></tr>
                        <input type= 'release_date' value={title} onChange={(event) => setReleaseDate(event.target.value)}/>
                        <tr><label>Genre</label></tr>
                        <input type= 'genre' value={title} onChange={(event) => setGenre(event.target.value)}/>
                    </tr>
                   
                </div>
            </table>

        </form>
    );
}
export default CreatNewSong;