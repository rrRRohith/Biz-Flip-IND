import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import DateRangePicker from 'rsuite/DateRangePicker';
import 'rsuite/DateRangePicker/styles/index.css';
import { Head, Link, useForm, router } from "@inertiajs/react";

const Graphs = () => {
    const [categories, setCategories] = useState([]);
    const [series, setSeries] = useState([
        { name: 'Leads', data: [] },
        { name: 'Views', data: [] }
    ]);

    const { data, setData } = useForm({
        start: '',
        end: '',
    });

    const formatDate = (date) => date ? date.toISOString().split('T')[0] : '';
    const dateChange = (range) => {
        setData('date_range', {
            start: range ? formatDate(range[0]) : '',
            end: range ? formatDate(range[1]) : '',
        });
    }

    const options = {
        chart: { id: 'combined-line-chart' },
        xaxis: { categories: categories },
        toolbar: {
            show: true,
            tools: {
                download: true,
                selection: true,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false,
            }
        }
    };

    const processData = (graph) => {
        const keys = Object.keys(graph);
        const leads = keys.map(key => graph[key].leads);
        const views = keys.map(key => graph[key].views);

        setCategories(keys);
        setSeries([
            { name: 'Leads', data: leads },
            { name: 'Views', data: views }
        ]);
    };

    const getData = async () => {
        try {
            const response = await axios.get(route("seller.graph"), data); // Ensure your route is correctly defined
            processData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="mt-5">
            <div className="text-xl font-bold mt-5">Daily Leads and Views</div>
            <div className="card rounded-input">
                <div className="card-body">
                    <Chart options={options} series={series} type="area" height={350} />
                </div>
            </div>
        </div>
    );
};

export default Graphs;
