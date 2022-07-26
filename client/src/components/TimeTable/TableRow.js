import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ClassCard from './ClassCard';

function DataTableRow({index, courses}){
    return index > 0? (
        <TableRow sx={{height: '64px'}}>
            <TableCell sx={{textAlign: 'center', padding: '0',height: '100%', borderRight: '1px solid #896b60'}}>{index}</TableCell>
            <TableCell sx={{textAlign: 'center', padding: '0', width: 'calc(100%/7)', height: '100%', borderRight: '1px solid #896b60'}} rowSpan={courses[2]? courses[2].time[0].count : 1} align="right">{courses[2]? <ClassCard course={courses[2]}/> : ''}</TableCell>
            <TableCell sx={{textAlign: 'center', padding: '0', width: 'calc(100%/7)', height: '100%', borderRight: '1px solid #896b60'}} rowSpan={courses[3]? courses[3].time[0].count : 1} align="right">{courses[3]? <ClassCard course={courses[3]}/> : ''}</TableCell>
            <TableCell sx={{textAlign: 'center', padding: '0', width: 'calc(100%/7)', height: '100%', borderRight: '1px solid #896b60'}} rowSpan={courses[4]? courses[4].time[0].count : 1} align="right">{courses[4]? <ClassCard course={courses[4]}/> : ''}</TableCell>
            <TableCell sx={{textAlign: 'center', padding: '0', width: 'calc(100%/7)', height: '100%', borderRight: '1px solid #896b60'}} rowSpan={courses[5]? courses[5].time[0].count : 1} align="right">{courses[5]? <ClassCard course={courses[5]}/> : ''}</TableCell>
            <TableCell sx={{textAlign: 'center', padding: '0', width: 'calc(100%/7)', height: '100%', borderRight: '1px solid #896b60'}} rowSpan={courses[6]? courses[6].time[0].count : 1} align="right">{courses[6]? <ClassCard course={courses[6]}/> : ''}</TableCell>
            <TableCell sx={{textAlign: 'center', padding: '0', width: 'calc(100%/7)', height: '100%', borderRight: '1px solid #896b60'}} rowSpan={courses[7]? courses[7].time[0].count : 1} align="right">{courses[7]? <ClassCard course={courses[7]}/> : ''}</TableCell>
          </TableRow>
    ): (<></>)
}
export default DataTableRow;