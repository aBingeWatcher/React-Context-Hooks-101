import React, { createContext, Component } from 'react';

export const ThemeContext= createContext(); //ThemeContext is the name of context here

class ThemeContextProvider extends Component {    //Theme context provider
    state = {     //data that is to be shared in various components
        isLightTheme: false,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui:'#333', bg: '#555'}
    }

    toggleTheme= () => {  //arrow function to toggle the current theme
        this.setState( {isLightTheme: !this.state.isLightTheme });
    }
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme }}>   
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;

// <(name of the context).Provider> tag wraps different components inside it so that shared data can be shared 
// inside these components
// value={ {...this.state }} should be the data or state that needs to be provided in different components
// {this.props.children} are the various components that are wrapped by the <ThemeContext.Provider>
// in this case Navbar and MovieList as seen in App.js
// also passing the toggleTheme function in the value property as an object so that this function can be
// accessed in any component where ThemeContext has been used