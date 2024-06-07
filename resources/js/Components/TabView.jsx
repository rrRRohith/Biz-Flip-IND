import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import PropTypes from 'prop-types';

function TabView({ options }) {
    const [activeKey, setActiveKey] = useState('0'); // activeKey should be a string

    const handleSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    };

    return (
        <>
            <Nav justify variant="tabs" defaultActiveKey={activeKey} onSelect={handleSelect}>
                {options.map((option, index) => (
                    <Nav.Item key={index}>
                        <Nav.Link eventKey={index.toString()}>{option.title}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            <TabContent>
                {options.map((option, index) => (
                    <TabPane key={index} eventKey={index.toString()} active={activeKey === index.toString()}>
                        <h3>{option.title} Content</h3>
                        <p>Tab {option.title} Content Here</p>
                    </TabPane>
                ))}
            </TabContent>
        </>
    );
}

TabView.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired
        })
    ).isRequired
};

export default TabView;
