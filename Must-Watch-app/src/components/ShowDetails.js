import React, { useContext } from 'react';
import { ShowsContext } from '../contexts/ShowsContext';

const ShowDetails = ({ show }) => {
    //const { removeShow }= useContext(ShowsContext);
    //above code when using reducer
    const {dispatch}= useContext( ShowsContext);


    return (
        //<li onClick={() => removeShow(show.id)}>
        //above code using reducer
        <li onClick={() => dispatch( {type: 'REMOVE_SHOW', id: show.id }) }>

            
            <div className="title"> {show.title} </div>
            <div className="cast"> {show.cast} </div>
        </li>
    );
}
 
export default ShowDetails;