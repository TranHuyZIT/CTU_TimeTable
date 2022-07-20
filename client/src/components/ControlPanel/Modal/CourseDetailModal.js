
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
import { useSelector } from 'react-redux';
import {useState, useEffect} from 'react'

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

export default function CourseDetailModal({course, open, setOpen}) {

    const [groups, setGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState({});
    
    const yearSemester = useSelector(yearSemesterSelector);
    const yearQuery = yearSemester.year.replace('-','')

    useEffect(() => {
        if (course.key) {
            axios.get(`https://api.tools.w5team.com//courses/key/${course.key}?y=${yearQuery}&n=${yearSemester.semester}`)
             .then((res) => {
                console.log(res);
                setGroups(res.data);
             })
        }
    }, [])


    const handleChange = (event) => {
        setSelectedGroup(event.target.value)
    };
    return (
        <div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition
            BackdropComponent={Backdrop}
            open={open}
            onClose={() => {setOpen(false)}}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
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
                        <Typography variant='p' sx={{fontWeight: '600', marginRight: '10px'}} component='span'>
                            Vui lòng chọn nhóm: 
                        </Typography>
                        <FormControl sx={{marginTop: '10px'}} fullWidth>
                            <InputLabel id="group">Nhóm Học Phần</InputLabel>
                            <Select
                            labelId="group-label"
                            id="group"
                            value={groups}
                            label="Nhóm Học Phần"
                            onChange={handleChange}
                            >
                            {groups.map((group) => (
                                <MenuItem value={group.id}>{`Nhóm ${group.id}, sĩ số còn lại: ${group.member}`}</MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                
            </Box>
            </Fade>
        </Modal>
        </div>
    );
}
