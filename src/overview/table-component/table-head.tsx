import { TableCell, TableRow, TableHead as MuiTableHead } from '@mui/material';
import React from 'react';

export const TableHead = ({ hideColumn }) => (
  <MuiTableHead>
    <TableRow>
      <TableCell align="left">Employee Id</TableCell>
      <TableCell align="left">Firstname</TableCell>
      {hideColumn && <TableCell align="left">Role</TableCell>}
      <TableCell align="left">PII</TableCell>
    </TableRow>
  </MuiTableHead>
);
