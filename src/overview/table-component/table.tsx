import React, { useEffect, useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Paper,
  Table as MuiTable,
  TableBody,
  TableContainer,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { employeeArray, EmployeeArrayProps } from 'employees';
import { onKeyPress, useLocalStorageState, onLoseFocus } from 'utils';

import { Tab } from 'overview/tabs';
import { TableHead } from 'overview/table-component/table-head';
import { TableRow } from 'overview/table-component/row-components/table-row';
import { AddEmployee } from 'overview/form-actions/add-employee';
import { RemoveEmployee } from 'overview/form-actions/remove-employee';

export const Table = () => {
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.up('sm'));

  const [localStorageArray, setLocalStorageArray] = useLocalStorageState(
    'employeeArray',
    employeeArray
  );

  const [showEmployees, setShowEmployees] = useState(() => localStorageArray);
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    console.log('searchValue', searchValue);
    const searchResultArray = searchValue.length === 0 ? localStorageArray : [];

    employeeArray.forEach((employee) => {
      searchValue.forEach((searchWord) => {
        if (searchWord === employee.employeeId + ' ' + employee.pii.firstName)
          searchResultArray.push(employee);
      });
    });

    setShowEmployees(searchResultArray);
  }, [localStorageArray, searchValue]);

  return (
    <Box sx={{ maxWidth: 850, margin: 'auto' }}>
      <Tab />

      <Autocomplete
        sx={{ marginTop: '64px' }}
        multiple
        id="tags-outlined"
        options={localStorageArray}
        getOptionLabel={({
          pii: { firstName },
          employeeId,
        }: EmployeeArrayProps) => employeeId + ' ' + firstName}
        filterSelectedOptions
        renderInput={(params) => {
          const {
            InputProps: { startAdornment },
          } = params;

          const inputArray = [];

          return (
            <TextField
              {...params}
              onKeyPress={(e) => {
                onKeyPress(e, startAdornment, inputArray);
                setSearchValue(inputArray);
              }}
              onBlur={() => {
                onLoseFocus(startAdornment, inputArray);
                setSearchValue(inputArray);
              }}
              label="search employee"
            />
          );
        }}
      />

      <Box sx={{ marginTop: '24px' }}>
        <Button
          tabIndex={-1}
          size="small"
          color="success"
          onClick={() => setLocalStorageArray(employeeArray)}
        >
          reset array(dev)
        </Button>
        <TableContainer component={Paper}>
          <MuiTable aria-label="simple table">
            <TableHead hideColumn={mediaQuery} />
            <TableBody>
              {showEmployees.map((info) => (
                <TableRow
                  key={info.employeeId + info.firstName}
                  hide={mediaQuery}
                  {...info}
                />
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>

        <AddEmployee
          employeeArray={localStorageArray}
          setArray={setLocalStorageArray}
          clearSearch={() => setSearchValue([])}
        />

        <RemoveEmployee
          employeeArray={localStorageArray}
          setArray={setLocalStorageArray}
          clearSearch={() => setSearchValue([])}
        />
      </Box>
    </Box>
  );
};
