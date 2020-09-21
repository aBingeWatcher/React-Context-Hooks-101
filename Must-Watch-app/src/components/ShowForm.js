import React, { useContext, useState } from 'react';
import { ShowsContext } from '../contexts/ShowsContext';

const ShowForm = () => {

    //const {addShows} = useContext(ShowsContext);
    //Above code using reducer
    const {dispatch}= useContext( ShowsContext);

    
    const [ title, setTitle]= useState('');
    const [ cast, setCast]= useState('');

    const handleSubmit= (e) => {
        e.preventDefault();

        //addShows(title, cast);
        //above code when using reducer
        dispatch({type: 'ADD_SHOWS', shows: {
            title: title,
            cast: cast
        }});

        setTitle('');
        setCast('');
    }
    return (
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Name of the TV Show/Movie " required value={title} onChange={ (e)=> setTitle(e.target.value) } />
            <input type="text" placeholder=" Cast Members " required value={cast} onChange={ (e)=> setCast(e.target.value) } />
            <input type="submit" value="Add to watchlist" />
        </form>
    );
}
 
export default ShowForm;