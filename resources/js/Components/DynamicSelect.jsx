import React, { Component } from 'react';
// import Select  from 'react-select/creatable';
import Select from 'react-select'


class DynamicSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: props.defaultValue ? { value: props.defaultValue, label: String(props.defaultValue) } : null,
            options: props.options || [],
            isClearable : props.isClearable
        };
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () => {
            this.props.onChange && this.props.onChange(selectedOption ? selectedOption.value : null);
        });
    };

    componentDidUpdate(prevProps) {
        if (prevProps.options !== this.props.options) {
            this.setState({ options: this.props.options });
        }
    }

    render() {
        const { selectedOption, options,isClearable } = this.state;
        const { nameval } = this.props;

        return (
            <Select 
                isClearable={isClearable}
                options={options}
                onChange={this.handleChange}
                name={nameval}
                value={selectedOption}
            />
        );
    }
}

export default DynamicSelect;
