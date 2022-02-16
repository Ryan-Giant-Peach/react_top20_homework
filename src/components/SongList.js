import React from 'react';
import ListItem from './ListItem';

const SongList = ({songs, onSongClick}) => {

    const songsItems = songs.map((song, index) => {
        return <ListItem song={song} key={index} onSongClick={onSongClick} position={index + 1}/>    
    })

    return (
        <div>
            <ul>
                {songsItems}
                
            </ul>
        </div>
    )
}

export default SongList;