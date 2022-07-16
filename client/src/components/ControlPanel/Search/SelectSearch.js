import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function SelectSearch({title, options}) {
  return (
    <FormControl fullWidth sx={{ m: 1, maxWidth: '100%' }}>
      <InputLabel variant="standard" htmlFor={title}>
        {title}
      </InputLabel>
      <NativeSelect
        inputProps={{
          name: title,
          id: title,
        }}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}
