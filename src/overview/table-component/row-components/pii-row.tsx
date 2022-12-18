import React from 'react';
import {
  TableCell,
  Collapse,
  Box,
  Alert,
  Table,
  TableHead,
  TableBody,
  TableRow,
} from '@mui/material';

export const PIIRow = ({ expanded, name, gender, email, number }) => (
  <TableRow>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box sx={{ margin: 1 }}>
          <Alert severity="warning">
            Personally Identifiable Information, handle with care
          </Alert>
          <Table
            aria-label="Personally Identifiable Information"
            sx={{ marginBottom: '24px' }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{name}</TableCell>
                <TableCell>{gender}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{number}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Collapse>
    </TableCell>
  </TableRow>
);
