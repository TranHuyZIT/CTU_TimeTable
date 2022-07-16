import { Grid, Paper } from "@mui/material";
import CourseList from "./Course/CourseList";
import Search from "./Search/Search";

export default function ControlPanel(){
    const courses = [
        {name:'CT500-Lập Trình Web', credits: 3},
        {name:'CT500-Máy Học Ứng Dung', credits: 4},
        {name:'CT190-Nhập Môn Trí Tuệ Nhân Tạo', credits: 2},
        {name:'CT500-Lập Trình Web', credits: 3},
        {name:'CT500-Máy Học Ứng Dung', credits: 4},
        {name:'CT190-Nhập Môn Trí Tuệ Nhân Tạo', credits: 2},
        {name:'CT500-Lập Trình Web', credits: 3},
        {name:'CT500-Máy Học Ứng Dung', credits: 4},
        {name:'CT190-Nhập Môn Trí Tuệ Nhân Tạo', credits: 2},
        {name:'CT500-Lập Trình Web', credits: 3},
        {name:'CT500-Máy Học Ứng Dung', credits: 4},
        {name:'CT190-Nhập Môn Trí Tuệ Nhân Tạo', credits: 2},
    ]
    return (
        <Grid container>
            <Paper sx={{height: '100vh', width: '100%'}} elevation={16}>
                <Grid item xs={12}>
                    <Search/>
                </Grid>
                <Grid item xs={12}>
                    <CourseList courses={courses}/>
                </Grid>
            </Paper>
        </Grid>
    )
}