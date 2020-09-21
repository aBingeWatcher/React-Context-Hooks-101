//Updating context data or state

import React, {Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

/*
class ThemeToggle extends Component {
    static contextType= ThemeContext;
    render() { 
        const { toggleTheme }= this.context;
        return ( 
            <button onClick={toggleTheme} > Toggle the theme </button>
        );
    }
}
*/

//Converting class component into functional and using useContext hook

const ThemeToggle = () => {
    const { toggleTheme }= useContext( ThemeContext );
    return (
        <button onClick={toggleTheme} > Toggle the theme </button>
    );
}
 
 
export default ThemeToggle;