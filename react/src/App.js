import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello</h1>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MLK day</td>
              <td>1-15-2024</td>
            </tr>
          </tbody>
        </table>
      <Calendar />
      </header>
    </div>
  );
}

export default App;
