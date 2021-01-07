import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import TopicContainer from './components/TopicContainer'
import TopicPage from './components/TopicPage'
import CreateTopic from './components/CreateTopic'
import dummyData from './dummy-data';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/'>
          <TopicContainer />
          <Link to='/new'>
            <Button color="success">Create New Post</Button>
          </Link>
        </Route>
        <Route path='/topics/:id'>
          <TopicPage items={dummyData}/>
        </Route>
        <Route path='/new'>
          <CreateTopic />
        </Route>
      </header>
    </div>

  );
}

export default App;
