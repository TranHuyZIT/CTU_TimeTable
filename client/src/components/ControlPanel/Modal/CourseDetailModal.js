
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { yearSemesterSelector } from '../../../store/selector';
import { useSelector } from 'react-redux';

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
    const yearSemester = useSelector(yearSemesterSelector);
    const yearQuery = yearSemester.year.replace('-','')
    const res = axios.get(`https://api.tools.w5team.com//courses/key/${course.key}?y=${yearQuery}&n=${yearSemester.semester}`)
    console.log(`https://api.tools.w5team.com//courses/key/${course.key}?y=${yearQuery}&n=${yearSemester.semester}`)
    console.log(res);
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
                <Typography id="transition-modal-title" variant="h6" component="h2">
                {course.name}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                {course.key}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                {course.weight}
                </Typography>
            </Box>
            </Fade>
        </Modal>
        </div>
    );
}
