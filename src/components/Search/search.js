import React, { Component } from 'react';
import HistoriacalData from '../HistoricalData/historical-data';
import StockPerformance from '..//StockPerformace/stock-performance';
import Dividends from '../Dividends/dividend';
import axios from 'axios';
import SearchBar from 'material-ui-search-bar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            data: [],
            performanceChange: '',
            showData: false,
            dividendData:[]

        };
    }

    onChange = e => {
        const value = e;
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
            axios
            .get(
                 `https://api.iextrading.com/1.0/stock/${value}/dividends/5y?filter=declaredDate,type,amount`
            )
            .then(res => {
                console.log("data dividens", res.data)
                this.setState({ dividendData: res.data});
            })
            .catch(err => console.log(err));
    };

    render() {
        const newData = this.state.data;
        return (
            <div className="search-bar">
                <MuiThemeProvider>
                    <SearchBar
                        onChange={this.onChange}
                        onRequestSearch={this.findQuote}
                        style={{
                            margin: '50 0',
                            maxWidth: 800
                        }}
                        value={this.state.quote}
                        name="quote"
                        hintText="Search Quote"
                    />

                </MuiThemeProvider>
                {this.state.showData ?
                    <React.Fragment>
                        <HistoriacalData item={newData} />
                        <StockPerformance item={newData} change={this.state.performanceChange} />
                        <Dividends item={this.state.dividendData} />
                    </React.Fragment>
                    : ''
                }
            </div>
        );
    }
}

export default Search;
