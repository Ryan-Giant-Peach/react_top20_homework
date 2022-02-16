import React from 'react';
import './ListItem.css';

const ListItem = ({song, onSongClick}) => {

    const handleClick = function(){
        onSongClick(song);
    }
    return(
        <>
        <li>
            <ol>
        <li>{song['im:artist'].label}</li>
        <li onClick={handleClick}>{song['im:name'].label}</li>
            </ol>
        </li>
        

        </>
    ) 

}

export default ListItem;