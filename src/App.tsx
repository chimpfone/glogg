import './App.css';
import glogg from './glogg.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={glogg} className="Glogg-logo" alt="glogg" />
        <h1 style={{ color: 'black' }}>Glogg.</h1>
      </header>
    </div>
  );
}

export default App;
