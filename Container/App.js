import React, { Component } from 'react';

import './App.css';
import Counter from '../Components/Counter/Counter';

class App extends Component {


  
  render() {
    return (
      <div className="App">
        <div className="first">
          <Counter second={0} />
        </div>
        <div className="cols">
          <Counter second={100} />
          <Counter second={500} />
          <Counter second={300} />
        </div>
      </div>
    );
  }
}

export default App;
