import './App.css';
import InputForm from './InputForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./calends512.png" alt="logo" />
        <h1>Hello</h1>
      </header>
      <main>
        <div className="container-xxl">
          <InputForm />
        </div>
      </main>
    </div>
  );
}

export default App;
