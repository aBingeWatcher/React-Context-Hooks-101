import React from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import SeriesContextProvider from './contexts/SeriesContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>     
        <AuthContextProvider>
          <Navbar />
          <br/>
          <SeriesContextProvider>
              <MovieList />
          </SeriesContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

//Both Theme and auth context provider are wrapping the three components.
//Hence these 3 components have access to these contexts.

// <ThemeContextProvider> wraps various components where we want to use shared state 
