import React, { Component } from 'react';

export default class StockPerformance extends Component {

    render() {
        return (
            <React.Fragment>
                <p className="historical-data-p">Stock Performance</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Week52High</th>
                            <th>Week52Low</th>
                            <th>LatestPrice</th>
                            <th>PreviousClose</th>
                        </tr>
                        <tr>
                            <td>{this.props.item.week52High}</td>
                            <td>{this.props.item.week52Low}</td>
                            <td>{this.props.item.latestPrice}	</td>
                            <td>{this.props.item.previousClose}	</td>
                        </tr>
                    </tbody>
                </table>
                { 
                    this.props.change > 0 ? 
                    <p>Stock price increased by {Math.round(this.props.change * 100)} cents </p> 
                    : <p>Stock price decreased by {Math.round(this.props.change * 100)} cents</p>
                }
            </React.Fragment>

        )
    }
}