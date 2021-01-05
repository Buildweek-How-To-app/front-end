import React from 'react';
import { Route } from 'react-router-dom';
import TopicContainer from './components/TopicContainer'
import TopicPage from './components/TopicPage'
import dummyData from './dummy-data';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' render={() => <TopicContainer />} />
        <Route exact path='/topics/:id'>
          <TopicPage items={dummyData}/>
        </Route>
      </header>
    </div>

  );
}

export default App;
