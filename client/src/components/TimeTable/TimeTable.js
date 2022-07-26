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
import { useSelector } from 'react-redux';
import { selectedCoursesSelector } from '../../store/selector';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    textAlign: 'center',
    width: 'calc(100% / 7)'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'center'
  },
}));

var Matrix = new Array(10);

for (let i = 0; i < Matrix.length; i++) {
  Matrix[i] = new Array(8);
}
export default function TimeTable() {
  const selectedCourses = useSelector(selectedCoursesSelector);

  console.log(Matrix);

    useEffect(()=>{
      
      if (selectedCourses){
        selectedCourses.forEach((course) => {
          course.time.forEach((courseTime) => {
            console.log(courseTime);
            const day = courseTime.day;
            const startPeriod = courseTime.start;
            Matrix[startPeriod][day] = course;
          })
        })
      }
    }, [selectedCourses])
  return (
    <TableContainer component={Paper}>
      <Table sx={{textAlign:'center', minWidth: 700, borderCollapse: 'collapse', height: '100%', color: '#896b60'}} aria-label="customized table">
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
        <TableBody sx={{height: '100%'}}>
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
