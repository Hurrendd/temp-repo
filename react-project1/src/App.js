import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {

  state = {
      name:'Hurrendd Ramos',
      counter: 0
  };  

  handleClick = (event) => { 
    this.setState({name: 'Hurrendd de Sousa Ramos'});
  }

  handleAClick = (event) => {
    event.preventDefault()
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { name, counter } = this.state;

    return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <p onClick={this.handleClick}>{name} - {counter}</p>
                <h1 onClick={this.handleClick}>ESTE É A PÁGINA DE START DO REACT - {name} </h1>
                <a onClick={this.handleAClick}
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
    );
  }
}


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>ESTE É A PÁGINA DE START DO REACT</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
