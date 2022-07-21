import SelectSearch from "./SelectSearch";
import SearchBar from "./SearchBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import yearSemesterSlice from "../../../store/slices/yearSemesterSlice";
import { useDispatch } from "react-redux";


export default function Search(){
  const yearOptions = ['2021-2022', '2022-2023', '2023-2024']
  const semesterOptions = ['1', '2', '3']
  const [year, setYear] = useState(yearOptions[0]);
  const [semester, setSemester] = useState(semesterOptions[0])
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(yearSemesterSlice.actions.changeYear(year));
  }, [year])
  useEffect(()=>{
    dispatch(yearSemesterSlice.actions.changeSemester(semester));
  }, [semester])
  return (
    <Box sx={{padding: '8px'}}>
      <Grid container>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{width: '100%', boxSizing:'border-box'}}>
            <Grid item xs={6}><SelectSearch setOption={setYear} title='Năm Học' options={yearOptions}/></Grid>
            <Grid item xs={6}><SelectSearch setOption={setSemester} title='Học Kỳ' options={semesterOptions}/></Grid>
          </Grid>
      </Grid>
    </Grid>
    </Box>
  )
}