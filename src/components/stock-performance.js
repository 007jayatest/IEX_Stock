import React, { Component } from 'react';

export default class StockPerformance extends Component {
    
    render() {
        // console.log(this.props);
        return (
            <React.Fragment>
                 <p>Stock Performance</p>
                <table>
                    <tbody>
                    <tr>
                        <th>week52High</th>
                        <th>week52Low</th>
                        <th>latestPrice</th>
                        <th>previousClose</th>
                    </tr>
                    <tr>
                        <td>{this.props.item.week52High}</td>
                        <td>{this.props.item.week52Low}</td>
                        <td>{this.props.item.latestPrice}	</td>
                        <td>{this.props.item.previousClose}	</td>
                    </tr>
                    </tbody>
                </table>
        {this.props.change ? <p>stock price increased by {Math.round(this.props.change*100)} cents </p>: <p>stock price decreased by {this.props.change*100} cents</p>}
                </React.Fragment>
            
        )
    }
}