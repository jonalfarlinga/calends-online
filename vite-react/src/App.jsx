import './styles/App.css';
import Form from './components/Form.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="mt-3" src="./calends512.png" alt="logo" />

      </header>
      <div className="fade-border"><h1>Welcome to Calends</h1></div>
      <main>
        <div id="App-box" className="container mx-auto col m-3">
          <Form />
        </div>
      </main>
      <footer>
        <a href="https://commons.wikimedia.org/wiki/File:Museo_del_Teatro_Romano_de_Caesaraugusta.43.jpg">Museo del Teatro Romano de Caesaraugusta.43.jpg</a> from Wikipedia.org
      </footer>
    </div>
  );
}

export default App;
