import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

import stats from '../Json/data.json';

const generadorColor = () => {
    const rgbColor =
      'rgba(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      0.8 +
      ')';
  
    return rgbColor;
  };

export default function Statistics({
    id,
    label,
    porcentage
}){
    return (
        <section class="statistics">
            <h2 class="title">Upload stats</h2>
            
            <ul class="stat-list">
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li class="item" style={{backgroundColor: generadorColor() }} >
                            <span class="label">{label}</span>
                            <span class="percentage">{percentage}</span>
                        </li>
                    )
                })
                }
            </ul>
        </section>
    )
}

Statistics.protoType = {
    label: PropTypes.string.isRequired,
    porcentage: PropTypes.number.isRequired,
}