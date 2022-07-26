import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ClassCard({course}) {
  return (
    <Box sx={{ width: '100%', padding: '0', height: '100%'}}>
        <Card sx={{height: '100%'}} variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {course.name}
                </Typography>
                <div>
                    <Typography variant='p' component="p">
                        {`Nhóm: ${course.id}`}
                    </Typography>
                    <Typography variant='p' component="p">
                        {`Phòng học: ${course.time[0].room}`}
                    </Typography>
                </div>
            </CardContent>
        <CardActions sx={{justifyContent: 'flex-end'}}>
        <Button  size="small">Xóa</Button>
        </CardActions>
            
        </Card>
    </Box>
  );
}
