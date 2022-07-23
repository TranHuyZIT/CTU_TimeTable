
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { yearSemesterSelector } from '../../../store/selector';
import { useDispatch, useSelector } from 'react-redux';
import {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import selectedCoursesSlice from '../../../store/slices/selectedCoursesSlice';
import { CircularProgress } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ClassCard({group}){
    console.log(group);
    return(
        group.time.map((day) => (
            <div key={day.day} style={{display: 'flex', width: '100%'}}>
                <div style={{width: '100%'}}>
                    <Typography variant='p' sx={{fontWeight: '600', marginRight: '10px'}} component='span'>
                        Chi Tiết: 
                    </Typography>
                    <Box sx={{ width: '100%' }}>
                        <Card sx={{ width: '100%' }} variant="outlined">
                            <CardContent sx={{ width: '100%', padding: '4px 8px'}}>
                                <Typography variant="h5" component="div">
                                    {`Thứ ${day.day}`}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {`Phòng: ${day.room}`}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {`Tiết: ${day.start}`}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </div>
            </div>
        ))
    )
}

export default function CourseDetailModal({course, open, setOpen}) {

    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState({});
    const [loading, setLoading] = useState(true)
    
    const yearSemester = useSelector(yearSemesterSelector);

    const dispatch = useDispatch();
    useEffect(() => {
        if (course.key) {
            const yearQuery = yearSemester.year.replace('-','')
            axios.get(`https://api.tools.w5team.com//courses/key/${course.key}?y=${yearQuery}&n=${yearSemester.semester}`)
             .then((res) => {
                setGroups(res.data);
                setLoading(false);
             })
        }
    }, [course, yearSemester])


    const handleChange = (event) => {
        console.log(event.target.value);
        setSelectedGroup(event.target.value)
    };
    const handleClose = () => {
        setOpen(false);
        setGroups([]);
        setSelectedGroup({});
        setLoading(true);
    }
    const handleAddCourse = () => {
        dispatch(selectedCoursesSlice.actions.addCourse(selectedGroup));
        handleClose();
    }
    return (
        <div>
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            open={open}
            onClose={handleClose}
            BackdropProps={{
            timeout: 500,
            }}
        >
            {!loading? (<Fade in={open}>
                <Box sx={style}>
                    <Typography sx={{textAlign: 'center'}} id="transition-modal-title" variant="h4" component="h2">
                    {course.name}
                    </Typography>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '18px', flexWrap: 'wrap'}}>
                        <div>
                            <Typography variant='p' sx={{fontWeight: '600', marginRight: '10px'}} component='span'>
                                Mã Học phần: 
                            </Typography>
                            <Typography variant='p' component='span'>
                                {course.key}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant='p' sx={{fontWeight: '600', marginRight: '10px'}} component='span'>
                                Tín chỉ: 
                            </Typography>
                            <Typography variant='p' component='span'>
                                {course.weight}
                            </Typography>
                        </div>
                        <div style={{width: '100%', marginTop: '10px'}}>
                            {groups.length === 0 && (
                            <Typography variant='p' sx={{fontWeight: '600', marginRight: '10px'}} component='span'>
                                Chưa có thông tin học phần ở thời gian này
                            </Typography>)
                            }
                            {groups.length > 0 && (
                                <>
                                    <Typography variant='p' sx={{fontWeight: '600', marginRight: '10px'}} component='span'>
                                        Vui lòng chọn nhóm: 
                                    </Typography>
                                    <FormControl sx={{marginTop: '10px'}} fullWidth>
                                        <InputLabel id="group-label">Nhóm Học Phần</InputLabel>
                                        <Select
                                        labelId="group-label"
                                        id="group"
                                        defaultValue=''
                                        value={selectedGroup}

                                        label="Nhóm Học Phần"
                                        onChange={handleChange}
                                        >
                                            {groups.map((group) => (
                                                <MenuItem key={group.class} value={group}>{`Nhóm ${group.id}, sĩ số còn lại: ${group.available}`}</MenuItem>
                                            ))}
                                        
                                        </Select>
                                    </FormControl>
                                </>
                                )}
                        </div>
                        {Object.keys(selectedGroup).length !== 0 && <ClassCard group={selectedGroup}/>}
                        <div style={{marginLeft: 'auto'}}>
                            <Button onClick={handleClose}>Hủy Bỏ</Button>
                            <Button onClick={handleAddCourse}>Thêm</Button>
                        </div>
                    </div>
                </Box>
            </Fade>)
             : (<Box sx={{...style, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress/>
             </Box>)}
        </Modal>
        
        </div>
    );
}
