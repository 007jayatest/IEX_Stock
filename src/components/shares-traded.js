import React, { Component } from 'react';
import axios from 'axios';
class SharesTraded extends Component {

    constructor(props) {
        super(props);
        this.state = {
            symbolsTraded:'',
            volumeTraded:''

        };
    }

    componentDidMount () {
        axios
        .get(
          `https://api.iextrading.com/1.0/stats/intraday?filter=volume,symbolsTraded`
        
        )
        .then(res => {
            const symbolsTradedValue=res.data.symbolsTraded.value;
              const volumeTradedValue =res.data.volume.value;
          this.setState({ symbolsTraded: symbolsTradedValue,volumeTraded:volumeTradedValue });
        })
        .catch(err => console.log(err));
    }
    
    render() {
        return (
            <div>
                <h4>companise stock got traded</h4>
                <p>{this.state.symbolsTraded}</p>
                <h4>total no of shares traded volume</h4>
                <p>{this.state.volumeTraded}</p>
            </div>
        );


    }
}

export default SharesTraded;
