import React, { useEffect, useState } from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { employeeArr, EmployeeArrProps } from '../employees';
import { Row } from './table-row';

export const Table = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const [showEmployees, setShowEmployees] = useState(employeeArr);
  const [input, setInput] = useState('');
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    let arr = searchValue.length === 0 ? employeeArr : [];
    employeeArr.forEach((ev) => {
      searchValue.forEach((e) => {
        if (e === ev.pii.firstName) arr.push(ev);
      });
    });

    setShowEmployees(arr);
  }, [searchValue]);

  return (
    <Box sx={{ maxWidth: 850, margin: 'auto' }}>
      <Autocomplete
        sx={{ marginTop: '64px' }}
        multiple
        id="tags-outlined"
        options={employeeArr}
        getOptionLabel={(option: EmployeeArrProps) => option.pii.firstName}
        filterSelectedOptions
        renderInput={(params) => {
          const {
            InputProps: { startAdornment },
          } = params;

          let arr = [];

          return (
            <TextField
              {...params}
              value={input}
              onChange={({ target }) => setInput(target.value)}
              onBlur={() => {
                (startAdornment as [])?.forEach((e: React.ReactElement) => {
                  arr.push(e.props.label);
                });

                setSearchValue(arr);
              }}
              label="search by first name"
            />
          );
        }}
      />
      <Box sx={{ marginTop: '24px' }}>
        <TableContainer component={Paper}>
          <MuiTable aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Employee Id</TableCell>
                <TableCell align="left">Firstname</TableCell>
                {matches && <TableCell align="left">Role</TableCell>}
                <TableCell align="left">PII</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {showEmployees.map((info, i) => (
                <Row key={info.customerId} hide={matches} {...info} />
              ))}
            </TableBody>
          </MuiTable>
        </TableContainer>

        <Button>Add employee</Button>
        <Button>Remove employee</Button>
      </Box>
    </Box>
  );
};
