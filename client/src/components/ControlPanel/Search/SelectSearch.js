import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function SelectSearch({title, options, setOption}) {
  return (
    <FormControl fullWidth sx={{ m: 1, maxWidth: '100%' }}>
      <InputLabel variant="standard" htmlFor={title}>
        {title}
      </InputLabel>
      <NativeSelect
        defaultValue={options[0]}
        inputProps={{
          name: title,
          id: title,
        }}
        onChange={(e) => {
          setOption(e.target.value);
        }}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
