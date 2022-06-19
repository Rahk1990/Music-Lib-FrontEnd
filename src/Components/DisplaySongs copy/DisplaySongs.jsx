import React, { useState } from 'react';

const SongList = (props) => {
    return(
        
        
        <table>
    <div>
        <thead>
            <tr>
                <th>Song Number</th>
                <th>Titles</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Realease Dates</th>
                <th>Genre</th>
            </tr>
        </thead>

    </div>
    <div>
        <tbody>
            {props.parentEntries.map((entry, index) => {
                return(
                    <div>
                        <tr>
                        <td>{index + 1 }</td>
                        <td>{entry.title}</td>
                        <td>{entry.artist}</td>
                        <td>{entry.album}</td>
                        <td>{entry.releaseDate}</td>
                        <td>{entry.genre}</td>
                        </tr>
                    </div>
                    );
                })}

        </tbody>
    </div>
    </table> 
    );

}
export default SongList

