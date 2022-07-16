import SelectSearch from "./SelectSearch";
import SearchBar from "./SearchBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
export default function Search(){
  return (
    <Box sx={{padding: '8px'}}>
      <Grid container>
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{width: '100%', boxSizing:'border-box'}}>
            <Grid item xs={6}><SelectSearch title='Năm Học' options={['2021-2022', '2022-2023', '2023-2024']}/></Grid>
            <Grid item xs={6}><SelectSearch title='Học Kỳ' options={['1', '2', '3']}/></Grid>
          </Grid>
      </Grid>
    </Grid>
    </Box>
  )
}