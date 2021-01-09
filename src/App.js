import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import TopicContainer from './components/TopicContainer';
import TopicPage from './components/TopicPage';
import CreateTopic from './components/CreateTopic';
import SearchBox from './components/Searchbox'
import Header from './components/Header';
import dummyData from './dummy-data';
import Howto from './components/Howto';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <Route exact path='/'>
          <Link to='/new'>
            <Button color="success" size="lg">Create New Post</Button>
          </Link>
          <br/>
          <Link to='/search'>
            <Button color="success" size="lg">Search How To's</Button>
          </Link>
          <Howto/>
        </Route>
        <Route path='/topics/:id'>
          <TopicPage items={dummyData}/>
        </Route>
        <Route path='/new'>
          <CreateTopic />
        </Route>
        <Route path='/search'>
          <SearchBox/>
        </Route>
      </header>
    </div>

  );
}

export default App;
