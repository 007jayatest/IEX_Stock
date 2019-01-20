import React, { Component } from 'react';
import HistoriacalData from './historical-data';
import axios from 'axios';
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            data: [],

        };
    }

    findQuote() {

    }

    onChange = e => {
        const value = e.target.value;
        this.setState({ quote: value });
        axios
            .get(
                // `https://api.iextrading.com/1.0/ref-data/symbols`
                `https://api.iextrading.com/1.0//stock/${value}/quote?filter=open,close,high,low,lasttime`
                // `https://api.iextrading.com/1.0/stock/market/batch?types=quote,news,chart&range=1m&last=5`
            )
            .then(res => {
                console.log("dat", res.data)
                const { AAPL, FB } = res.data;
                const data = [];
                data[0] = AAPL;
                data[1] = FB;
                this.setState({ data: res.data });
            })
            .catch(err => console.log(err));

    };

    render() {
        const newData = this.state.data;
        // if (!this.state || !this.state.data) {
        //     return <div>Loading...</div>
        // }
        console.log("hii", newData)
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

                </React.Fragment>




            </div>
        );


    }
}

export default Search;
