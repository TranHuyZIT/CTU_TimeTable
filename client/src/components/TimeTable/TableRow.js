import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

function DataTableRow({index, courses}){
    console.log(courses);
    return (
        <TableRow>
            <TableCell>{index}</TableCell>
            <TableCell sx={{textAlign: 'center'}} rowSpan={courses[2]? courses[2].time[0].count : 1} align="right">{courses[2]? courses[2].name : ''}</TableCell>
            <TableCell sx={{textAlign: 'center'}} rowSpan={courses[3]? courses[3].time[0].count : 1} align="right">{courses[3]? courses[3].name : ''}</TableCell>
            <TableCell sx={{textAlign: 'center'}} rowSpan={courses[4]? courses[4].time[0].count : 1} align="right">{courses[4]? courses[4].name : ''}</TableCell>
            <TableCell sx={{textAlign: 'center'}} rowSpan={courses[5]? courses[5].time[0].count : 1} align="right">{courses[5]? courses[5].name : ''}</TableCell>
            <TableCell sx={{textAlign: 'center'}} rowSpan={courses[6]? courses[6].time[0].count : 1} align="right">{courses[6]? courses[6].name : ''}</TableCell>
            <TableCell sx={{textAlign: 'center'}} rowSpan={courses[7]? courses[7].time[0].count : 1} align="right">{courses[7]? courses[7].name : ''}</TableCell>
          </TableRow>
    )
}
export default DataTableRow;