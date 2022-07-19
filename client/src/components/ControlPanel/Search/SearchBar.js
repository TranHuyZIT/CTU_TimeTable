import {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import axios from 'axios';
import courseListSlice from '../../../store/courseListSlice';
import { useDispatch } from 'react-redux';
import useDelay from '../../../hooks/useDelay';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const onInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const delayedKeyword = useDelay(searchText);


  useEffect(()=>{
    const search = async () => {
      if (!delayedKeyword) dispatch(courseListSlice.actions.updateCourse([]));
      const res = await axios.get(
        `https://api.tools.w5team.com/courses/search/${delayedKeyword}`,
      );
      dispatch(courseListSlice.actions.updateCourse(res.data));
    }
    search();
  }, [delayedKeyword])
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', boxSizing: 'border-box' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Tìm Khóa Học Theo Mã Học Phần"
        value= {searchText}
        onChange={onInputChange}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
}