import React from 'react';
import Box from '@mui/joy/Box';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';

export default function CircularProgressChildren({ value = null, icon = null, color = '#3e98c7' }) {
  return (
    <div style={{ width: 80, height: 80, textAlign: 'center' }}>
      <CircularProgressbarWithChildren
        value={value}
        styles={buildStyles({
          pathColor: color,
          trailColor: '#d6d6d6',
        })}
      >
        <i className={`bi ${icon} fs-3 mb-2 fw-bold`}></i>
        <div style={{ fontSize: 12, marginTop: -5 }}>
          {/* <strong>{value}</strong> */}
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

CircularProgressChildren.propTypes = {
  value: PropTypes.number,
  icon: PropTypes.string,
  color: PropTypes.string,
};