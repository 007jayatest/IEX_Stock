import React, { Component } from 'react';
import Search from './components/search';
import SharesTraded from './components/shares-traded';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    }
  }
  componentDidMount() {
  }
  render() {
    
      return (
        <div className="App">
        <SharesTraded />
          <Search />
        </div>
      );

    
  }
}

export default App;
