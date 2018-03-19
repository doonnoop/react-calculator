import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from './logic/calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (butonName) => {
    this.setState(calculate(this.state, butonName));
  }
  render() {
    return (
      <div className="component-app">
        <Display 
          value = {this.state.next || this.state.total || '0'}
        />
        <ButtonPanel 
          clickHandler={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
