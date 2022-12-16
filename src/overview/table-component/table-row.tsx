import { TableRow, TableCell, Button } from '@mui/material';
import React from 'react';

export const Row = ({ customerId, role, pii, hide }) => {
  // const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow
        key={customerId}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell>{customerId}</TableCell>
        <TableCell>{pii.firstName}</TableCell>
        {hide && <TableCell>{role}</TableCell>}
        <TableCell>
          <Button>show</Button>
        </TableCell>
      </TableRow>
    </>
  );
};
