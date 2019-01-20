import React, { Component } from 'react';
import HistoriacalData from './historical-data';
import StockPerformance from './stock-performance';
import axios from 'axios';
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            data: [],
            performanceChange:''

        };
    }

    findQuote() {

    }

    onChange = e => {
        const value = e.target.value;
        this.setState({ quote: value });
        axios
            .get(
                
                `https://api.iextrading.com/1.0//stock/${value}/quote?filter=open,close,high,low,week52High,week52Low,previousClose,latestPrice`
                // `https://api.iextrading.com/1.0/stock/market/batch?types=quote,news,chart&range=1m&last=5`
                // https://api.iextrading.com/1.0//stock/aapl/quote?filter=week52High,week52Low,previousClose,latestPrice
            )
            .then(res => {
                console.log("dat", res.data)
                // const { AAPL, FB } = res.data;
                // const data = [];
                // data[0] = AAPL;
                // data[1] = FB;
                const change =res.data.latestPrice-res.data.previousClose;
                
                this.setState({ data: res.data,performanceChange:change });

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

                <React.Fragment>
                    <HistoriacalData item={newData} />
                  <StockPerformance item={newData} change={this.state.performanceChange}/>
                </React.Fragment>




            </div>
        );


    }
}

export default Search;
