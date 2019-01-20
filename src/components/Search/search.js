import React, { Component } from 'react';
import HistoriacalData from '../HistoricalData/historical-data';
import StockPerformance from '..//StockPerformace/stock-performance';
import axios from 'axios';
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            data: [],
            performanceChange: '',
            showData: false

        };
    }

    onChange = e => {
        const value = e.target.value;
        this.setState({ quote: value });
        axios
            .get(`https://api.iextrading.com/1.0//stock/${value}/quote?filter=open,close,high,low,week52High,week52Low,previousClose,latestPrice`)
            .then(res => {
                const change = res.data.latestPrice - res.data.previousClose;
                this.setState({
                    data: res.data,
                    performanceChange: change,
                    showData: true
                });

            })
            .catch(err => console.log(err));
    };

    render() {
        const newData = this.state.data;
        return (
            <div>
                <form onSubmit={this.findQuote}>
                    <div>
                        <input
                            type="text"
                            name="quote"
                            placeholder="quote"
                            value={this.state.quote}
                            onChange={this.onChange}
                        />
                    </div>
                </form>
                {this.state.showData ? 
                    <React.Fragment>
                        <HistoriacalData item={newData} />
                        <StockPerformance item={newData} change={this.state.performanceChange} />
                    </React.Fragment>
                    : " "
                 }
            </div>
        );
    }
}

export default Search;
