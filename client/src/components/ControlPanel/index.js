import { Grid, Paper } from "@mui/material";
import CourseList from "./Course/CourseList";
import Search from "./Search/Search";

export default function ControlPanel(){
    return (
        <Grid container>
            <Paper sx={{height: '100vh', width: '100%'}} elevation={16}>
                <Grid item xs={12}>
                    <Search/>
                </Grid>
                <Grid item xs={12}>
                    <CourseList/>
                </Grid>
            </Paper>
        </Grid>
    )
}