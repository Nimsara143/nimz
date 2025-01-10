import React from 'react';

const Alerts = ({ alerts }) => (
    <div>
        <h3>Notifications</h3>
        <ul>
            {alerts.map((alert, index) => (
                <li key={index}>{alert}</li>
            ))}
        </ul>
    </div>
);

export default Alerts;
