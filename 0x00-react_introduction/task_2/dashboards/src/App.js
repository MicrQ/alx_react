import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className='App-header' data-testid='App-header'>
        <img src={logo} className='App-logo' alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body' data-testid='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <button>OK</button>
      </div>
      <div className='App-footer' data-testid='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </div>
  );
}

export default App;
