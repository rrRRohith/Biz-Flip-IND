import React, { Component } from 'react';
import CreatableSelect from 'react-select/creatable';

class DynamicMultiSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: props.defaultValue ? props.defaultValue.map(option => ({ value: option, label: String(option) })) : [],
            options: props.options || []
        };
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () => {
            this.props.onChange && this.props.onChange(selectedOption ? selectedOption.map(option => option.value) : []);
        });
    };

    componentDidUpdate(prevProps) {
        if (prevProps.options !== this.props.options) {
            this.setState({ options: this.props.options });
        }
    }

    render() {
        const { selectedOption, options } = this.state;
        const { nameval } = this.props;

        return (
            <CreatableSelect
                isClearable
                options={options}
                onChange={this.handleChange}
                name={nameval}
                value={selectedOption}
                isMulti 
            />
        );
    }
}

export default DynamicMultiSelect;
