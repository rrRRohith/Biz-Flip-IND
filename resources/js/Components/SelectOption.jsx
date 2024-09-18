// SelectOption.jsx

import React, { Component } from 'react';
import Select from 'react-select';

class SelectOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: props.defaultValue ? { value: props.defaultValue, label: String(props.defaultValue) } : null
        };
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () => {
            this.props.onChange && this.props.onChange(selectedOption.value);
        });
    };

    render() {
        const { selectedOption } = this.state;

        const options = Array.from({ length: 25 }, (v, k) => ({
            value: k + 1,
            label: `${k + 1}`
        }));

        return (
            <div className="">
                <Select
                    name="position"
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                />
            </div>
        );
    }
}

export default SelectOption;
