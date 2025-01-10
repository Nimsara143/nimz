import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const PriceChart = ({ data }) => {
    return (
        <div style={{ width: 300, height: 400, margin: "auto" }}>
            <h3 style={{ textAlign: "center" }}>Rice Stock by Type</h3>
            <ResponsiveContainer width="90%" height="90%">
                <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                    <XAxis dataKey="type" stroke="#5550bd" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="stock" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PriceChart;
