import {
  Button as MuiButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { setEmployeeId } from 'utils';

export const AddEmployee = ({ employeeArray, setArray, clearSearch }) => {
  const [toggleDialog, setToggleDialog] = useState(false);

  const handleCLick = (close) => () => {
    setToggleDialog(close ? true : false);
  };

  const { handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    const newEmployee = {
      employeeId: setEmployeeId(data.firstName, data.lastName),
      role: data.role,
      pii: {
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        email: data.email,
        number: data.number,
      },
    };

    clearSearch();
    setArray([...employeeArray, newEmployee]);
  };

  interface InputProps {
    label: string;
    infoType: string;
    type?: string;
  }

  const Input = ({ label, type, infoType }: InputProps) => (
    <TextField
      required
      margin="dense"
      label={label}
      type={type}
      fullWidth
      variant="standard"
      onChange={({ target: { value } }) => setValue(infoType, value)}
    />
  );

  return (
    <>
      <MuiButton aria-label="addEmployee" onClick={handleCLick(true)}>
        Add employee
      </MuiButton>

      <Dialog open={toggleDialog} onClose={handleCLick(false)}>
        <DialogTitle>Add Employee</DialogTitle>

        <DialogContent>
          <DialogContentText>
            To add an employee, please fill out this form with the necessary
            information
          </DialogContentText>

          <form id="addEmployee" onSubmit={handleSubmit(onSubmit)}>
            <Input label="Employee Role" infoType="role" />
            <Input label="Employee Firstname" infoType="firstName" />
            <Input label="Employee Lastname" infoType="lastName" />
            <Input label="Employee Gender" infoType="gender" />
            <Input
              label="Employee Email Address"
              type="email"
              infoType="email"
            />
            <Input
              label="Employee Mobile Number"
              type="tel"
              infoType="number"
            />
          </form>
        </DialogContent>

        <DialogActions>
          <MuiButton form="addEmployee" type="submit">
            Add
          </MuiButton>
          <MuiButton onClick={handleCLick(false)}>Cancel</MuiButton>
        </DialogActions>
      </Dialog>
    </>
  );
};
