import React, { createContext, useState , useReducer, useEffect } from 'react';
//import {v4 as uuidv4} from 'uuid'; 
import { showReducer } from '../reducers/showReducer';

export const ShowsContext= createContext();

const ShowsContextProvider = (props) => {
    /* const [shows, setShows]= useState([
        {title: 'The Office (US)', cast: ' Steve Carell, Rainn Wilson, John Krasinski, Jenna Fischer ', id:1},
        {title: 'Parks and Recreation', cast: ' Chris Pratt, Aubrey Plaza, Aziz Ansari, Rashida Jones', id:2}
    ]);

    */

    //using useReducer() hook
    //adding local storage

    //useReducer takes a 3rd param as a function
    //which will return the default value(taken from local storage in your browser)
    const [shows, dispatch]= useReducer( showReducer, [], ()=> {
        const localData= localStorage.getItem('show');
        return localData ? JSON.parse(localData): [];
    });  //empty array as initial state

    
    
    //everytime shows data/state is changed, useEffect will run this callback function
    //and updated state will be stored locally
    useEffect( () => {
        localStorage.setItem( 'show', JSON.stringify(shows))  //.setItem( key:value pair)
    }, [shows]);

    //Below functions have been consolidated under showReducer
    /*const addShows= (title,cast) => {
        setShows([...shows, {title: title,cast: cast, id: uuidv4() }])
    }

    const removeShow= (id) => {
        setShows( shows.filter( show => show.id !== id ));
    };

    */ 

    return(
        <ShowsContext.Provider value={ {shows, dispatch } } >
            {props.children}
        </ShowsContext.Provider>
    );
}  

export default ShowsContextProvider;