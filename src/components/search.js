import React, { Component } from 'react';
import HistoriacalData from './historical-data';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            data: ''
        };
    }

    componentDidMount() {
        const data = [...this.props.datas];
        this.setState({ data }, () => { });
    }
    
    onChange = e => {
        const value = e.target.value;
        this.setState({ quote: value });
    };

    render() {
        const newData = this.props.datas;
        if (!this.state || !this.state.data) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <form>
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
                
                {newData.map((item, key) => {
                        if (item.quote.symbol.toLowerCase() == this.state.quote.toLowerCase()) {

                            return <React.Fragment key={key}>
                                  <HistoriacalData item={item}/> 
                                </React.Fragment>
                        }
                        else
                            return null;
                    })}
                
            </div>
        );


    }
}

export default Search;
