import React from "react";
import propTypes from 'prop-types';
import './TransactionHistory.css';

import transacciones from '../Json/transactions.json';

const generadorColor = () => {
    const rgbColor =
      'rgba(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      0.5 +
      ')';

    return rgbColor;
};

export default function TransactionHistory({
    id,
    type,
    amount,
    currency
}){
    return(
    
    <table class="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        
        <tbody>
            {
                transacciones.map(({id, type, amount, currency}) =>{
                    return (
                        <tr style={{backgroundColor: generadorColor() }} >
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                })
            }

        </tbody>
    </table>
    )
}

TransactionHistory.propTypes = {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    currency: propTypes.string.isRequired,
}