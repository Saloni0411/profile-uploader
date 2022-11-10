import React, { useState } from 'react';
import {TextField, Box, Button, Alert,InputLabel, MenuItem, Select, FormControl, Stack} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import { styled } from '@mui/material/styles';
import { useCreateMutation } from '../services/userAPI';

export default function Home() {

   // Style for Upload Button
   const Input = styled('input')({
    display: 'none',
  })

  // states
  const [name, setName] = useState()
  const [dob, setDob] = useState(null);
  const [country, setCountry] = useState('');
  const [resume, setResume] = useState('');
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })

  // Clear Form
  const resetForm = () => {
    setName('')
    setDob(null)
    setCountry('')
    setResume('')
    document.getElementById('resume-form').reset()
  }

  // RTK Query

  const [create] = useCreateMutation(

  )

   // Handle Form Submission
   const handleSubmit = async(e) => {
    e.preventDefault();
    const data = new FormData()
    data.append('name', name)
    data.append('dob', dob)
    data.append('country', country)
    data.append('resume', resume)
    if (name) {
      const res = await create(data);
      console.log(res);
      if (res.data.status === true) {
        setError({ status: true, msg: "Resume Uploaded Successfully", type: 'success' })
        resetForm()
      }
      if (res.data.status === false) {
        setError({ status: true, msg: res.data.message, type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
   }
  return (
    <>
        <Box component="form" sx={{ p: 3, marginLeft: 50, marginRight: 50 }} noValidate id="resume-form" onSubmit={handleSubmit}>
        <TextField id="name" name="name" required fullWidth margin='normal' value={name} label='Name' onChange={(e) => setName(e.target.value)}/>
        
            <Box mt={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker label="Date of Birth" value={dob} onChange={(newValue) => { setDob(newValue) }} renderInput={(params) => <TextField {...params} />} />
              </LocalizationProvider>
            </Box>

            <FormControl fullWidth margin='normal'>
              <InputLabel id="state-select-label">Country</InputLabel>
              <Select labelId='state-select-label' id='state-select' value={country} label='country' onChange={(e) => { setCountry(e.target.value) }}>
                <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                <MenuItem value="Austria">Austria</MenuItem>
                <MenuItem value="France">France</MenuItem>
              </Select>
            </FormControl>

            <Stack direction="row" alignItems="center" spacing={4} >
            <label htmlFor="resume-file">
                <Input accept="doc/*" id="resume-file" type="file" onChange={(e)=>{setResume(e.target.files[0])}} />
                <Button variant="contained" component="span">Upload Resume</Button>
                {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
              </label>
              </Stack>

              <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }} color="error">Submit</Button>
        </Box>
    </>
  )
}
