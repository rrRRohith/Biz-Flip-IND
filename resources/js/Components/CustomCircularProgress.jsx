import * as React from 'react';
import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import ReportIcon from '@mui/icons-material/Report';

export default function CircularProgressChildren() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      {/* Circular Progress with Error Color and Report Icon */}
      <CircularProgress color="danger"
        variant="determinate"
        value={60}
        sx={{
          "--CircularProgress-size": "80px",
          "--CircularProgress-trackThickness": "8px",
          "--CircularProgress-progressThickness": "8px"
        }}
      >
        <ReportIcon />
      </CircularProgress>
    </Box>
  );
}
