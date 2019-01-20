
import React, { Component } from 'react';

export default class Dividends extends Component {

    render() {
        console.log("yy", this.props);

        return (
            <React.Fragment>
                <p className="historical-data-p">Dividends data</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Declared Date</th>
                            <th>Type</th>
                            <th>Amount</th>

                        </tr>
                        {this.props.item.map((item, key) => {
                            return (<tr key={key} >
                                <td>{item.declaredDate}</td>
                                <td>{item.type}</td>
                                <td>{item.amount}</td>

                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </React.Fragment>

        )
    }
}