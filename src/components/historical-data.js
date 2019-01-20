import React, { Component } from 'react';

export default class HistoriacalData extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                 <p>Historical Data</p>
                <table>
                    <tbody>
                    <tr>
                        <th>Open</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Close</th>
                    </tr>
                    <tr>
                        <td>{this.props.item.open}</td>
                        <td>{this.props.item.high}</td>
                        <td>{this.props.item.low}	</td>
                        <td>{this.props.item.close}	</td>
                    </tr>
                    </tbody>
                </table>
                </React.Fragment>
            
        )
    }
}