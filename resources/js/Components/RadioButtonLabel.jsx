
import React, { useState } from 'react';

export default function RadioButtonLabel({ name, value, checked, label, onChange }) {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = () => {
        setIsChecked(!isChecked);
        onChange(value); // Call onChange with the value
    };

    return (
        <label className="radio-inline p-0 me-10">
            <div className="radio radio-info">
                <input
                    type="radio"
                    name={name}
                    id={`status-${value}`}
                    value={value}
                    checked={isChecked}
                    onChange={handleChange}
                />
                <label htmlFor={`status-${value}`}>{label}</label>
            </div>
        </label>
    );
}
