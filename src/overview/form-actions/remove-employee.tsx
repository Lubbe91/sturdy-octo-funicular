import {
  Button as MuiButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from '@mui/material';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const RemoveEmployee = ({ employeeArray, setArray, clearSearch }) => {
  const [toggleDialog, setToggleDialog] = useState(false);
  const [option, setOption] = useState('');

  const handleCLick = (close) => () => {
    setToggleDialog(close ? true : false);
  };

  const { handleSubmit, setValue } = useForm();

  const onSubmit = ({ employee }) => {
    setOption('');
    clearSearch('');
    setArray(
      employeeArray.filter(
        ({ pii, employeeId }) => pii.firstName + employeeId !== employee
      )
    );
  };

  return (
    <>
      <MuiButton aria-label="removeEmployee" onClick={handleCLick(true)}>
        Remove employee
      </MuiButton>

      <Dialog fullWidth open={toggleDialog} onClose={handleCLick(false)}>
        <DialogTitle>Remove Employee</DialogTitle>

        <DialogContent>
          <form id="removeEmployee" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              autoFocus
              fullWidth
              select
              defaultValue=""
              value={option}
              helperText="Select an employee"
              onChange={({ target: { value } }) => {
                setOption(value);
                setValue('employee', value);
              }}
            >
              {employeeArray.map((option) => {
                return (
                  <MenuItem
                    key={option.pii.lastName}
                    value={option.pii.firstName + option.employeeId}
                  >
                    {option.pii.firstName + ' ' + option.pii.lastName}
                  </MenuItem>
                );
              })}
            </TextField>
          </form>
        </DialogContent>

        <DialogActions>
          <MuiButton form="removeEmployee" type="submit">
            Remove
          </MuiButton>
          <MuiButton onClick={handleCLick(false)}>Cancel</MuiButton>
        </DialogActions>
      </Dialog>
    </>
  );
};
