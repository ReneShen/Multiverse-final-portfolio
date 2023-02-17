import React from 'react';
import {Helmet} from 'react-helmet';

import NavBar from './components/NavBar'
import CoverPage from './components/CoverPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Rene's Portfolio</title>
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap" />
      </Helmet>
      <NavBar />
      <CoverPage />
    </div>
  );
}

export default App;
