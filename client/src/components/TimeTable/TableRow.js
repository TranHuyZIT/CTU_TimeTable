import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ClassCard from "./ClassCard";
import { useState, useEffect } from "react";
const periodTime = [
  "",
  "07:00 - 07:50",
  "07:50 - 08:40",
  "08:50 - 09:40",
  "09:50 - 10:40",
  "10:40 - 11:30",
  "13:30 - 14:20",
  "14:20 - 15:10",
  "15:20 - 16:10",
  "16:10 - 17:00",
];
function DataTableRow({ index, courses, matrix }) {
  const [rowSpanned, setRowSpanned] = useState([]);

  useEffect(() => {
    let spanned = [];
    for (let i = 0; i < 8; i++) {
      spanned.push(true);
    }
    for (let i = 0; i < matrix.length; i++) {
      let row = matrix[i];
      for (let j = 0; j < row.length; j++) {
        let col = row[j];
        if (col && index > i && index < i + col.duration) {
          spanned[j] = false;
        }
      }
    }
    setRowSpanned([...spanned]);
  }, [matrix]);

  return index > 0 ? (
    <TableRow sx={{ height: "56px" }}>
      <TableCell
        key={index * 7 + 1}
        sx={{
          fontSize: 13,
          fontWeight: "700",
          textAlign: "center",
          padding: "0",
          height: "100%",
          border: "none",
          border: "1px solid #896b60",
        }}
      >{`${index} (${periodTime[index]})`}</TableCell>
      {rowSpanned[2] && (
        <TableCell
          key={index * 7 + 2}
          sx={{
            textAlign: "center",
            padding: "0",
            height: "100%",
            border: "none",
            border: "1px solid #896b60",
          }}
          rowSpan={courses[2] ? courses[2].duration : 1}
          align="right"
        >
          {courses[2] ? <ClassCard course={courses[2]} /> : ""}
        </TableCell>
      )}
      {rowSpanned[3] && (
        <TableCell
          key={index * 7 + 3}
          sx={{
            textAlign: "center",
            padding: "0",
            height: "100%",
            border: "none",
            border: "1px solid #896b60",
          }}
          rowSpan={courses[3] ? courses[3].duration : 1}
          align="right"
        >
          {courses[3] ? <ClassCard course={courses[3]} /> : ""}
        </TableCell>
      )}
      {rowSpanned[4] && (
        <TableCell
          key={index * 7 + 4}
          sx={{
            textAlign: "center",
            padding: "0",
            height: "100%",
            border: "none",
            border: "1px solid #896b60",
          }}
          rowSpan={courses[4] ? courses[4].duration : 1}
          align="right"
        >
          {courses[4] ? <ClassCard course={courses[4]} /> : ""}
        </TableCell>
      )}
      {rowSpanned[5] && (
        <TableCell
          key={index * 7 + 5}
          sx={{
            textAlign: "center",
            padding: "0",
            height: "100%",
            border: "none",
            border: "1px solid #896b60",
          }}
          rowSpan={courses[5] ? courses[5].duration : 1}
          align="right"
        >
          {courses[5] ? <ClassCard course={courses[5]} /> : ""}
        </TableCell>
      )}
      {rowSpanned[6] && (
        <TableCell
          key={index * 7 + 6}
          sx={{
            textAlign: "center",
            padding: "0",
            height: "100%",
            border: "none",
            border: "1px solid #896b60",
          }}
          rowSpan={courses[6] ? courses[6].duration : 1}
          align="right"
        >
          {courses[6] ? <ClassCard course={courses[6]} /> : ""}
        </TableCell>
      )}
      {rowSpanned[7] && (
        <TableCell
          key={index * 7 + 7}
          sx={{
            textAlign: "center",
            padding: "0",
            height: "100%",
            border: "none",
            border: "1px solid #896b60",
          }}
          rowSpan={courses[7] ? courses[7].duration : 1}
          align="right"
        >
          {courses[7] ? <ClassCard course={courses[7]} /> : ""}
        </TableCell>
      )}
    </TableRow>
  ) : (
    <></>
  );
}
export default DataTableRow;
