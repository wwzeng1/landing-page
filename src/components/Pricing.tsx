import React from 'react';
import Fireworks from './Fireworks';

const Pricing = () => {
    return (
        <div>
            <h1>Pricing</h1>
            <button onClick={() => document.getElementById('fireworks').click()}>Show Fireworks</button>
            <Fireworks id="fireworks" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
        </div>
    );
};

export default Pricing;
