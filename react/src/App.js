import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>Hello</h1>
        <div className="container">
          <Calendar />
        </div>
      </main>
    </div>
  );
}

export default App;
