import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{dummyData[0].title}</h1>
        <p>
        {dummyData[0].content}
        </p>
      </header>
    </div>
  );
}

export default App;
