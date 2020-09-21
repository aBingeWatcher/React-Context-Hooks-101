//Creating context with functional components

import React, {createContext, useState } from 'react';

export const SeriesContext= createContext();

const SeriesContextProvider = (props) => {
    const [series, setSeries]= useState([
        {title: 'Harry Potter', id: 1},
        {title: 'Sex Education', id: 2},
        {title: 'Schitts Creek', id: 3},
        {title: 'Parks and Recreation', id: 4}
    ]);
    return (
        <SeriesContext.Provider value={ {series} } >
            {props.children}
        </SeriesContext.Provider>
    );
}
 
export default SeriesContextProvider;

//props is needed to be declared as param in functional component which wasn't the case for class component
