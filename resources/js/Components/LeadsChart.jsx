import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

export default function LeadsChart({ title = '', category = [], data = [] }) {

    // Ensure category and data are arrays if they are passed as JSON strings
    const parsedCategory = typeof category === 'string' ? JSON.parse(category) : category;
    const parsedData = typeof data === 'string' ? JSON.parse(data) : data;

    const options = {
        chart: {
            height: 350,
            type: 'area',
            zoom: {
                enabled: false
            }
        },
        colors: ["#4c95dd"],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: parsedCategory
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                }
            }
        }
    };

    const series = [{
        name: title,
        data: parsedData
    }];

    return (
        <div id="chart">
            <Chart
                options={options}
                series={series}
                type="area"
                height={220}
            />
        </div>
    );
}

LeadsChart.propTypes = {
    title: PropTypes.string,
    category: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
};
