import React from 'react'
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import { useGetDetailsQuery } from '../services/userAPI';
import {useState, useEffect} from 'react';
import { format } from 'date-fns';

export default function List() {
    const [candidates, setCandidates] = useState([])

    // RTK Query
    const { data, isSuccess } = useGetDetailsQuery();
    console.log(data)

    useEffect(() => {
        if (data && isSuccess) {
          setCandidates(data.candidates)
        }
      }, [data, isSuccess])
    return (
        <div>
            <Box display="flex" justifyContent='center' sx={{ backgroundColor: 'info.light', padding: 0.5, marginTop: 3 }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'white' }}> List of Candidates</Typography>
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 550 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">DOB</TableCell>
                            <TableCell align="center">Country</TableCell>
                            <TableCell align="center">Resume</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {candidates.map((candidate, i) => {
                        return(
                        <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center">{candidate.name}</TableCell>
                            <TableCell align="center">{format(new Date(candidate.dob), 'dd-MM-yyyy')}</TableCell>
                            <TableCell align="center">{candidate.country}</TableCell>
                            <TableCell align="center">src={`http://localhost:8000/${candidate.resume}`}</TableCell>
                        </TableRow>
                    );
                    })
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
