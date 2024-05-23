import React from 'react';
import Chart from 'react-apexcharts';

const LeadsChart = () => {
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
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$" + val + " thousands";
                }
            }
        }
    };

    const series = [{
        name: 'Revenue',
        data: [31, 50, 28, 70, 45, 90, 140]
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
};

export default LeadsChart;
