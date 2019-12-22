import React from 'react';

import './App.css';
import Search from './Search/Search';
import ShowTrains from './ShowTrain/ShowTrain';
import Admin from './Admin/Admin';

function App() {
  return (
    <div className="App">
    <Admin></Admin>
     <Search/>
     <ShowTrains/>
    </div>
  );
}

export default App;
