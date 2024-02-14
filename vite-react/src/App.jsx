import './styles/App.css';
import Form from './components/Form.jsx';
import WelcomeModal from './components/WelcomeModal.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="mt-3" src="./calends512.png" alt="logo" />
      </header>
      <div className="fade-border"><h1>Calends Online</h1></div>
      <main>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal">
            About
        </button>
        <WelcomeModal />
        <div id="App-box" className="container mx-auto col m-3">
          <Form />
        </div>

      </main>
      <footer>
      <a href="https://github.com/jonalfarlinga/calends-online">Calends-Online Github Project</a>
        <a href="https://commons.wikimedia.org/wiki/File:Museo_del_Teatro_Romano_de_Caesaraugusta.43.jpg">Museo del Teatro Romano de Caesaraugusta.43.jpg</a> from Wikipedia.org
      </footer>
    </div>
  );
}

export default App;
