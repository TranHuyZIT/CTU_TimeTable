import {useEffect}from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DataTableRow from './TableRow';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'center'
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
var Matrix = new Array(10);

for (let i = 0; i < Matrix.length; i++) {
  Matrix[i] = new Array(8);
}
export default function TimeTable({selectedCourses}) {
    useEffect(()=>{
      
      if (selectedCourses){
        selectedCourses.forEach((course) => {
          course.time.forEach((courseTime) => {
            console.log(courseTime);
            const day = courseTime.day;
            const startPeriod = courseTime.start;
            const duration = courseTime.count;
            Matrix[startPeriod][day] = course;
          })
        })
      }
      console.log(Matrix);
    }, [selectedCourses])
  return (
    <TableContainer component={Paper}>
      <Table sx={{textAlign:'center', minWidth: 700 }} aria-label="customized table">
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
          {Matrix.map((periodArr, period) => {
            return(
              <DataTableRow index={period} courses={periodArr} />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
