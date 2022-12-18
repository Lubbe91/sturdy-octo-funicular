import React, { useEffect, useRef, useState } from 'react';
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

import { onKeyPress, useLocalStorageState, onBlur } from 'utils';

import { TableHead } from 'overview/table-component/table-head';
import { TableRow } from 'overview/table-component/row-components/table-row';
import { AddEmployee } from 'overview/form-actions/add-employee';
import { RemoveEmployee } from 'overview/form-actions/remove-employee';
import { employeeArray, EmployeeArrayProps } from 'data/employees';
import { Navigation } from 'overview/navigation/navigation';
import { workshopData } from 'data/workshop';

export const Table = ({ workshop }) => {
  const theme = useTheme();
  const mediaQuery = useMediaQuery(theme.breakpoints.up('sm'));

  const [localStorageArray, setLocalStorageArray] = useLocalStorageState(
    `employeeArray_${workshop}`,
    employeeArray[workshop]
  );

  const [showEmployees, setShowEmployees] = useState(() => localStorageArray);
  const [searchValue, setSearchValue] = useState([]);

  const autocompleteRef = useRef(null);

  useEffect(() => {
    setLocalStorageArray(employeeArray[workshop]);
    setShowEmployees(employeeArray[workshop]);
  }, [workshop, setLocalStorageArray]);

  useEffect(() => {
    const searchResultArray = searchValue.length === 0 ? localStorageArray : [];

    localStorageArray.forEach((employee) => {
      searchValue.forEach((searchWord) => {
        if (searchWord === employee.employeeId + ' ' + employee.pii.firstName)
          searchResultArray.push(employee);
      });
    });

    setShowEmployees(searchResultArray);
  }, [localStorageArray, searchValue]);

  return (
    <Box sx={{ maxWidth: 850, margin: 'auto' }}>
      <Navigation />

      <h1>{workshopData[workshop]?.name}</h1>
      <p>{workshopData[workshop]?.introText}</p>

      <Autocomplete
        sx={{ marginTop: '64px' }}
        ref={autocompleteRef}
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

          const inputArray: string[] = [];

          return (
            <TextField
              {...params}
              onKeyPress={(e) => {
                onKeyPress(e, startAdornment, inputArray);
                setSearchValue(inputArray);
              }}
              onBlur={() => {
                onBlur(startAdornment, inputArray);
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
          color="error"
          onClick={() => setLocalStorageArray(employeeArray[workshop])}
        >
          reset array
        </Button>

        <TableContainer component={Paper}>
          <MuiTable aria-label="simple table">
            <TableHead hideColumn={mediaQuery} />
            <TableBody>
              {showEmployees.map((info) => (
                <TableRow
                  key={info.employeeId + info.firstName}
                  hide={mediaQuery}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
