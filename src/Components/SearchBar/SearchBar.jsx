import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchedEntry, setSearchedEntry] = useState ('');

    function handleSubmit(entry){
        entry.preventDefault()
        props.songFilter(searchedEntry)
    }   

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchedEntry} onChange={(entry) => setSearchedEntry(entry.target.value)} type='text' placeholder='Search'></input>
                <button type= 'submit'>Search</button>
            </form>
        </div>
    )

    
}
export default SearchBar;