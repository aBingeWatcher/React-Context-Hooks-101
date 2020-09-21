//Second way to access context
// Access two contexts in one component

import React, {Component, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { SeriesContext } from '../contexts/SeriesContext';
import { ThemeContext } from '../contexts/ThemeContext';

/*
class MovieList extends Component {
    render() { 
        return ( 
            <AuthContext.Consumer>{ (authContext) => (   //VVI: no spaces between > and {
                <ThemeContext.Consumer>{ (themeContext) => {   // using .Consumer of the context created and function that takes context object or state as parameter
                    const { isAuthenticated, toggleAuth } =authContext;
                    const { isLightTheme, light, dark}= themeContext;
                    const theme= isLightTheme ? light: dark;
                    return (
                        <div className="movie-list" style={{ color:theme.syntax, background: theme.bg }}>
                            <div onClick={ toggleAuth}>
                                { isAuthenticated ? 'Logged In': 'Logged Out' }
                            </div>
                            <br/>
                            <ul>
                                <li style={{ background: theme.ui }}> Harry Potter </li>
                                <li style={{ background: theme.ui }}> The Office (US) </li>
                                <li style={{ background: theme.ui }}> Yeh Jawani hai Deewani </li>
                                <li style={{ background: theme.ui }}> Master of none </li>
                            </ul> 
                        </div> 
                    )
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        );
    }
}
*/

//Now making this component functional and accessing multiple contexts using  useContext hooks

const MovieList = () => {
    const {isLightTheme, light, dark}= useContext(ThemeContext);
    const { isAuthenticated, toggleAuth }= useContext( AuthContext);
    const { series }= useContext( SeriesContext);
    const theme= isLightTheme ? light: dark;
    return(
        <div className="movie-list" style={{ color:theme.syntax, background: theme.bg }}>
            <div onClick={ toggleAuth}>
                { isAuthenticated ? 'Logged In': 'Logged Out' }
            </div>
            <br/>
            <ul>
                {series.map( tv => {
                    return(
                        <li key={tv.id} style={{ background: theme.ui }}> {tv.title} </li>
                    );
                })}
            </ul> 
        </div> 
    );
}
 
export default MovieList;


//Advantages in accessing context by this way:
//1. This approach can also be used in functional components
//2. Multiple context in one component can be used in this approach