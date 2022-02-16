import React from 'react';

const SongSelecter = ({songs, onSongClick}) => {

    const handleChange = function(event){
        const chosenSong = songs[event.target.value]
        onSongClick(chosenSong)
    }

    const songOptions = songs.map((song, index) => {
        return <option value={index} key={index}>{song.name}</option>

    })

    return(
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Song</option>
            {songOptions}

        </select>
    )

}

export default SongSelecter;