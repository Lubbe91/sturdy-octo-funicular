import React, { useState } from 'react';
import { TableRow as MuiTableRow, TableCell, Button } from '@mui/material';
import { PIIRow } from 'overview/table-component/row-components/pii-row';

export const TableRow = ({ employeeId, role, pii, hide }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <MuiTableRow key={employeeId}>
        <TableCell>{employeeId}</TableCell>
        <TableCell>{pii.firstName}</TableCell>
        {hide && <TableCell>{role}</TableCell>}

        <TableCell>
          <Button onClick={() => setExpanded(!expanded)}>
            {expanded ? 'close' : 'show'}
          </Button>
        </TableCell>
      </MuiTableRow>

      <PIIRow
        expanded={expanded}
        name={pii.firstName + ' ' + pii.lastName}
        gender={pii.gender}
        email={pii.email}
        number={pii.number}
      />
    </>
  );
};
