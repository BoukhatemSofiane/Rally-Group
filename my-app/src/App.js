import logo from './222.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="title">
          Welcome to Rally Group.
        </p>
        <a
          className="App-link"
          href="https://drive.google.com/file/d/1mddA36uDsHHC-OkvBBFMqXMGE_Q8uWu-/view?usp=share_link"
          target="_blank"
          rel="noopener noreferrer"
          style={{"margin-bottom":"20px"}}
        >
          Company profie
        </a>

        <a
          className="App-link"
          href="https://maps.app.goo.gl/iRcTZ43s7ud8MP328"
          target="_blank"
          rel="noopener noreferrer"
        >
          Location
        </a>

        <p
          className="App-link info"
        >
          Phone: +971523731772
        </p>

        <p
          className="App-link info"
          style={{"margin-top":"0px"}}
        >
          Email: reservations@rallylimo.com
        </p>

      </header>
    </div>
  );
}

export default App;
