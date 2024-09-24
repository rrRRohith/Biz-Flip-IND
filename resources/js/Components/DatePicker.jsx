import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb'; // Import the UK locale for dd/MM/yyyy format

export default function DatePicker({ onChange }) {
  const [value, setValue] = React.useState([null, null]); // State to store selected date range

  // Set the locale globally to "en-gb" for dd/MM/yyyy format
  dayjs.locale('en-gb');

  const handleDateChange = (newValue) => {
    setValue(newValue);

    // Only call the parent onChange if both start and end dates are selected
    const [startDate, endDate] = newValue;
    if (startDate && endDate) {
      onChange(newValue); // Call the parent's onChange function
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['SingleInputDateRangeField']}>
        <DateRangePicker
          // slots={{ field: SingleInputDateRangeField }}
          inputFormat="DD/MM/YYYY" // Ensure date format is dd/MM/yyyy
          value={value}
          onChange={handleDateChange} // Handle changes
          name="allowedRange"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
