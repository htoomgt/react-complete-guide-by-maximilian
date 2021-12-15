import React from 'react';
import PropTypes from 'prop-types';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {

    const dataPointValues =  props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    
    

    return (
        <div className="chart">
            {
                props.dataPoints.map((dataPoint) => {
                    return (
                        <ChartBar
                            key={dataPoint.label} 
                            value={parseFloat(dataPoint.value)}
                            maxValue={totalMaximum}
                            label={dataPoint.label}
                        />
                    );
                })
            }
        </div>
    )
}

Chart.propTypes = {
    dataPoints: PropTypes.array.isRequired
}

export default Chart
