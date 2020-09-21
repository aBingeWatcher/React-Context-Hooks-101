import React, { useContext } from 'react';
import { ShowsContext } from '../contexts/ShowsContext';
import ShowDetails from './ShowDetails';

const ShowList= () => {
    const {shows} = useContext(ShowsContext);
    return  shows.length ? (
        <div className="show-list">
            <ul>
                { shows.map( show => {
                    return ( <ShowDetails show={show} key={show.id} /> );
                })}
            </ul>
        </div>

    ) : (
        <div className="empty"> You have nothing to watch. </div>
    )
}

export default ShowList;