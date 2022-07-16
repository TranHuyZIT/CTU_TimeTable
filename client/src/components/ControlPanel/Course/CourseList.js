import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SchoolIcon from '@mui/icons-material/School';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import './CourseList.css'
export default function CourseList({courses}) {
  return (
    <List className='scroll' sx={{ width: '100%', bgcolor: 'background.paper', overflowY:'scroll'}}>
      {courses.map((course)=>(
        <ListItem className='list-item'>
            <Grid container>
                <Grid item xs={2}>
                    <ListItemAvatar>
                    <Avatar>
                        <SchoolIcon />
                    </Avatar>
                    </ListItemAvatar>
                </Grid>
                <Grid item xs={8}>
                    <ListItemText primary={course.name} secondary={`Tín chỉ: ${course.credits}`} />
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained">Thêm</Button>
                </Grid>
            </Grid>
        </ListItem>
      ))}
    </List>
  );
}
