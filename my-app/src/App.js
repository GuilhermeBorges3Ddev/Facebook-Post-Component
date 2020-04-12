import React from 'react';

import './css/App.css';
import PostContainer from './components/PostContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostContainer />
      </header>
    </div>
  );
}

export default App;
