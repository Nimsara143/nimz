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

const data = [
    { district: "Polonnaruwa", stock: 150 },
    { district: "Anuradhapura", stock: 120 },
    { district: "Ampara", stock: 200 },
    { district: "Kurunegala", stock: 100 },
    { district: "Hambantota", stock: 180 },
];

const StockChart = () => {
    return (
        <div style={{ width: 500, height: 400 }}>
            <h3 style={{ textAlign: "center" }}>Paddy Stock by District</h3>
            <ResponsiveContainer width="90%" height="90%">
                <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
                    <XAxis dataKey="district" stroke="#5550bd" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="stock" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StockChart;
