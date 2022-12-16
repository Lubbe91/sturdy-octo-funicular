import { TextField, Autocomplete as MuiAutocomplete } from '@mui/material';
import { EmployeeArrProps } from 'overview/employees';
import React from 'react';

export const Autocomplete = ({ options, searchValue }) => {
  return (
    <MuiAutocomplete
      multiple
      id="tags-outlined"
      options={options}
      getOptionLabel={(option: EmployeeArrProps) => {
        return option.pii.firstName;
      }}
      filterSelectedOptions
      renderInput={(params) => (
        <TextField
          {...params}
          label="filterSelectedOptions"
          placeholder="Favorites"
        />
      )}
    />
  );
};
