import React from 'react';
import './Laoding.css';

import Loading1 from '../../assets/loading.svg';

function Loading() {
    return (
        <div className="loading">
            <img src={Loading1} alt="loading" />
        </div>
    );
}

export default Loading;
