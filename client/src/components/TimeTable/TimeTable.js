import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TimeTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Tiết / Thứ</StyledTableCell>
            <StyledTableCell align="right">Thứ 2</StyledTableCell>
            <StyledTableCell align="right">Thứ 3</StyledTableCell>
            <StyledTableCell align="right">Thứ 4</StyledTableCell>
            <StyledTableCell align="right">Thứ 5</StyledTableCell>
            <StyledTableCell align="right">Thứ 6</StyledTableCell>
            <StyledTableCell align="right">Thứ 7</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <StyledTableCell>1</StyledTableCell>
            </TableRow>
            <TableRow>
                <StyledTableCell>2</StyledTableCell>
            </TableRow>
            <TableRow>
                <StyledTableCell>3</StyledTableCell>
            </TableRow>
            <TableRow>
                <StyledTableCell>4</StyledTableCell>
            </TableRow>
            <TableRow>
                <StyledTableCell>5</StyledTableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
