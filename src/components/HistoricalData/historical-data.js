import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import MaterialTable from 'material-table'
export class HistoriacalData extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <p className="historical-data-p">Historical Data</p>
                <table className="historical-data-table">
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

export default HistoriacalData;