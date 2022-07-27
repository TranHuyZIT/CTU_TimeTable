import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ClassCard({course}) {
  return (
    <Box sx={{ width: '100%', padding: '0', height: '100%', border: '1px solid #4a332d'}}>
        <Card sx={{height: '100%' , display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}} variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 18, fontWeight: '700', color: '#4a332d' }} gutterBottom>
                    {course.name}
                </Typography>
                <div>
                    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <Typography sx={{ fontSize: 16, fontWeight: '700', color: '#F0c648' }} variant='p' component="p">
                            {`Nhóm: `}
                        </Typography>
                        <Typography sx={{ fontSize: 16, marginLeft: '2px'}} variant='p' component="p">
                            {course.id}
                        </Typography>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                        <Typography sx={{ fontSize: 16, fontWeight: '700', color: '#F0c648' }} variant='p' component="p">
                            {`Phòng: `}
                        </Typography>
                        <Typography sx={{ fontSize: 16, marginLeft: '2px'}} variant='p' component="p">
                            {course.room}
                        </Typography>
                    </div>
                </div>
            </CardContent>
        <CardActions sx={{justifyContent: 'flex-end'}}>
        <Button sx={{width: '100%', backgroundColor: '#4a332d', color: 'white', transition: '0.1s transform linear', ':hover': {
            backgroundColor: '#4a332d !important', transform: 'scale(1.1)'
        }}} size="small">Xóa</Button>
        </CardActions>
            
        </Card>
    </Box>
  );
}
