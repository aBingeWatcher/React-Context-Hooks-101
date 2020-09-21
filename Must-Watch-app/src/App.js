import React from 'react';
import ShowsContextProvider from './contexts/ShowsContext';
import Navbar from './components/Navbar';
import ShowList from './components/ShowList';
import ShowForm from './components/ShowForm';

function App() {
  return (
    <div className="App">
       <ShowsContextProvider>
          <Navbar />
          <ShowList />
          <ShowForm />
       </ShowsContextProvider>
    </div>
  );
}

export default App;
