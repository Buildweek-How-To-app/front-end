import React from 'react';
import { Route } from 'react-router-dom';
import TopicContainer from './components/TopicContainer'
import TopicPage from './components/TopicPage'
import './App.css';
import dummyData from './dummy-data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' render={() => <TopicContainer />} />
        <Route path='/topics/:id'>
          <TopicPage />
        </Route>
      </header>
    </div>

  );
}

export default App;
