//First way to access context

import React, {Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

/* class Navbar extends Component {
    static contextType= ThemeContext;  // write down the name of the context we wish to use in this component
    render() { 
        //console.log(this.context);  //theme context provider state can be accessed here
        const { isLightTheme, light, dark}= this.context; //simple destructuring state data
        const theme= isLightTheme ? light:dark;  //accessing context
        return (
            <nav style={{ background: theme.bg , color: theme.syntax }}>
                <h1> Context App</h1>
                <ul>
                    <li> Home </li>
                    <li> About </li>
                    <li> Contact </li>
                </ul>
            </nav>
        );
    }
}
*/

//This way of accessing context does not support multiple context access.

//Accessing context using contextType can be done only inside class component
// So if the component is functional then we can use useContext hook to access the context


const Navbar = () => {
    const {isLightTheme, light, dark}= useContext(ThemeContext);
    const theme= isLightTheme ? light:dark;
    return (
        <nav style={{ background: theme.bg , color: theme.syntax }}>
            <h1> Context App</h1>
            <ul>
                <li> Home </li>
                <li> About </li>
                <li> Contact </li>
            </ul>
        </nav>
    );
}

// useContext( name of the context );
 
 
export default Navbar;


