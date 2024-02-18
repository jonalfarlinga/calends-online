import './styles/App.css';
import Form from './components/Form.jsx';
import WelcomeModal from './components/WelcomeModal.jsx';
import { useState } from 'react';

function App() {
    const [calendar, setCalendar] = useState('');
  return (
    <div
      className=
        { "App " + calendar === 'TXST_calendar' ?
          "txst" : calendar === 'SUU_calendar' ?
          "suu" : null }
    >
      <header
        className=
          { "App-header " + calendar === 'TXST_calendar' ?
            "txst-header" : calendar === 'SUU_calendar' ?
            "suu-header" : null }
      >
        <img className="mt-3 hero" src="./calends512.png" alt="logo" />
      </header>
      <div
        className={ "fade-border " + calendar === 'TXST_calendar' ?
            "fade-border-txst" : calendar === 'SUU_calendar' ?
            "fade-border-suu" : null }
      >
        <h1>Calends Online</h1>
      </div>
      <main>
        <button
          type="button"
          className=
            { "btn btn-primary " + calendar === 'TXST_calendar' ?
              "btn-txst" : calendar === 'SUU_calendar' ?
              "btn-suu" : null }
          data-bs-toggle="modal"
          data-bs-target="#welcomeModal">
            About
        </button>
        <WelcomeModal />
        <div id="App-box" className="container mx-auto col m-3">
          <Form calendar={calendar} setCalendar={setCalendar} />
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
