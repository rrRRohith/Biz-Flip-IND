import React from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className="spinnerContainer">
            <div className="spinner-container">
                <ClipLoader
                    color="#4c95dd"
                    cssOverride={{
                        'border-width': '4px'
                    }}
                    size={50}
                />
            </div>
        </div>
    );
};

export default Spinner;