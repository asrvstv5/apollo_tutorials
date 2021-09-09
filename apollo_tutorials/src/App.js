import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Dogs, DogPhoto} from './Dogs';
import {ExchangeRates} from './ExchangeRates';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       dogName: "bulldog",
    }
    
  }
  componentWillMount() {
    this.onDogSelected = this.onDogSelected.bind(this);
}

  onDogSelected = (event) => {
    console.log("A dog was selected = ", event.target.value);
    this.setState({
      dogName: event.target.value,
    })
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Apollo Tutorial for Mesh
        </p>
        <Dogs onDogSelected={this.onDogSelected}/>
        <DogPhoto breed={this.state.dogName}/>
      </header>
      <ExchangeRates />
    </div>
  );
  }
}

export default App;
