import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="Main">
        <h1>Если не подписан</h1> 
      </div>
      <div class="bottom-menu" id="menu">
        <button class="btn" onclick="window.location.href='https://t.me/test_tg_video';">Приобрести подписку</button>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
