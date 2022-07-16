import SelectSearch from "./SelectSearch";
import SearchBar from "./SearchBar";
import { Grid } from "@mui/material";
export default function Search(){
  return (
    <Grid container>
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} sx={{width: '100%', boxSizing:'border-box'}}>
          <Grid item xs={6}><SelectSearch/></Grid>
          <Grid item xs={6}><SelectSearch/></Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}