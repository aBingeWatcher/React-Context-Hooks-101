import React, { useContext } from 'react';
import { ShowsContext } from '../contexts/ShowsContext';

const Navbar = () => {
    const {shows}= useContext(ShowsContext);
    return (
        <div className="navbar">
            <h1> What to binge watch ??  </h1>
            <p>Currently you have {shows.length} items in your watchlist. </p>
        </div>
    );
}
 
export default Navbar;