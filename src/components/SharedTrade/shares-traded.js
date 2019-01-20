import React, { Component } from 'react';
import axios from 'axios';
class SharesTraded extends Component {

    constructor(props) {
        super(props);
        this.state = {
            symbolsTraded: '',
            volumeTraded: ''
        };
    }

    componentDidMount() {
        axios
            .get(
                `https://api.iextrading.com/1.0/stats/intraday?filter=volume,symbolsTraded`
            )
            .then(res => {
                const symbolsTradedValue = res.data.symbolsTraded.value;
                const volumeTradedValue = res.data.volume.value;
                this.setState({
                    symbolsTraded: symbolsTradedValue,
                    volumeTraded: volumeTradedValue
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="shares-traded">
                <h1>IEX Stocks</h1>
                <h4>Company's stock got traded : <span className="h4-span"> {this.state.symbolsTraded} </span></h4>
                <p></p>
                <h4>Total no of shares traded volume : <span className="h4-span"> {this.state.volumeTraded} </span> </h4>
            </div>
        );
    }
}

export default SharesTraded;
