import React, { Component } from 'react';
import Search from './components/search'
import './App.css';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    }
  }
  componentDidMount() {
    axios
      .get(
        `https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb&types=quote,news,chart&range=1m&last=5`
      )
      .then(res => {
        const { AAPL, FB } = res.data;
        const data = [];
        data[0] = AAPL;
        data[1] = FB;
        this.setState({ datas: data });
      })
      .catch(err => console.log(err));
  }
  render() {
    if (!this.state || !this.state.datas) {
      return <div>Loading...</div>

    }
    if (this.state || this.state.datas) {
      return (
        <div className="App">
          <Search datas={this.state.datas} />
        </div>
      );

    }
  }
}

export default App;
