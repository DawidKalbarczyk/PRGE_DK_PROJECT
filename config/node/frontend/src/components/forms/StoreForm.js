import React from 'react';
import {Box, Button, TextField} from "@mui/material";

function StoreForm({ data, setData, onSubmit }) {
    return(
        <Box component="form" onSubmit={onSubmit} sx={{display: 'block'}}>
            <TextField
                style={{padding: 10}}
                label="Właściciel"
                value={data.owner}
                onChange={(e)=>setData({...data, owner:e.target.value})}
            ></TextField>
            <TextField
                style={{padding: 10}}
                label="Lokalizacja"
                value={data.location}
                onChange={(e) => setData({...data, location:e.target.value})}
            ></TextField>
            <TextField
                style={{padding: 10}}
                label="Ilość pracowników"
                value={data.employeesNr}
                onChange={(e) => setData({...data, employeesNr:e.target.value})}
            ></TextField>
            <TextField
                style={{padding: 10}}
                label="Numer telefonu"
                value={data.phoneNumber}
                onChange={(e) => setData({...data, phoneNumber:e.target.value})}
            ></TextField>
            <Button type="submit" variant="contained">Dodaj sklep</Button>
        </Box>
    )
}
export default StoreForm;