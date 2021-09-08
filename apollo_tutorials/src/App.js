import logo from './logo.svg';
import './App.css';
import {Dogs, DogPhoto} from './Dogs';
import {ExchangeRates} from './ExchangeRates';

function onDogSelected() {
  console.log("A dog was selected")
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Apollo Tutorial for Mesh
        </p>
        <Dogs onDogSelected={onDogSelected}/>
        <DogPhoto/>
      </header>
      <ExchangeRates />
    </div>
  );
}

export default App;
