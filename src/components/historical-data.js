import React, { Component } from 'react';

export default class HistoriacalData extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log(this.props.item);
        return (
        
                <table>
                    <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                    </tr>
                    <tr>
                        <td>{this.props.item.quote.change}</td>
                        <td>40.50	</td>
                        <td>40.70	</td>
                        <td>39.96	</td>
                        <td>40.58	</td>
                    </tr>
                    </tbody>
                </table>
            
        )
    }
}