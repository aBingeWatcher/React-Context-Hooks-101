import React , { useState, useEffect } from 'react';
// useState is a react hook to use state inside a functional component
//useEffect hook helps to run some code whenever the component data updates ie. renders or re-renders

import {v4 as uuidv4} from 'uuid';  //to generate unique id , uuidv4 is a function
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs]=useState([          //initial value for this state in square brackets 
        { title: 'Sang Rahiyo', id: 1},
        { title: 'You are the reason', id: 2},
        { title: 'Afreen afreen', id: 3}
    ]);

    const [num, setNum ]= useState(1);

    const addSong= (title) => {
        setSongs([...songs, {title: title ,id: uuidv4() }])   // ... is called spread syntax
    }

    useEffect( () => {
        console.log('useEffect hook ran', songs);
    }, [songs] )  
    //useEffect() takes a callback func as param which runs everytime the component renders or re-renders, 
    //i.e. everytime data inside the component changes 
    // the 2nd param in useEffect() is the data we want to monitor
    // i.e. callback func will run only when the data mentioned in the 2nd param changes
    // songs data in this case and not num data

    useEffect( () => {
        console.log(' useEffect hook ran', num);
    }, [num] )
    // this useEffect callback func will run only when num data is changed

    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id} >{song.title} </li>)
                })}
            </ul>
            <NewSongForm  addSong={addSong} /> 
            <br/>
            <br/>
            <button onClick={ () => setNum(num+1) }> Add 1 : {num} </button>
        </div>
    );
}
 
export default SongList;

//addSong() is passed to NewSongForm.js 

//useState function returns two value in an array
//1. actual data or state     (songs)
//2. function to edit the actual data or state  (setSongs)